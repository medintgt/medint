import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "#5181C2", // Hex color code
    logo: "https://storage.googleapis.com/medint/public/logo.svg", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credenciales",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Correo electrónico",
          type: "text",
          placeholder: "example@example.com",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/medint`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        // Get JSON from response
        const user = await res.json();

        if (res.ok && user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          const isAllowedToSignIn = true
          if (isAllowedToSignIn) {
            return true
          } else {
            // Return false to display a default error message
            return false
            // Or you can return a URL to redirect to:
            // return '/unauthorized'
          }
        },
        async redirect({ url, baseUrl }) {
          // Allows relative callback URLs
          if (url.startsWith("/")) return `${baseUrl}${url}`
          // Allows callback URLs on the same origin
          else if (new URL(url).origin === baseUrl) return url
          return baseUrl
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        },
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        }
      },
    }),
  ],
});
