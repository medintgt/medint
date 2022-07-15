        <!-- Title and breadcums -->
        <section class="container mx-auto flex justify-between p-4">
    <h1 class="text-2xl"><?php print(title[2]);?></h1>
    <span class="text-xl flex items-center cursor-pointer"><i class="fi fi-rr-arrow-left grid place-items-center pr-2"></i>Movements</span>
</section>
<div class="container mx-auto grid justify-center">
    <!-- Form -->
<form class="my-4 max-w-md  md:w-96 h-auto p-3" action="">
    <div>
    <label class="text-lg text-gray-400">From</label>
    <div class=" pt-2 grid place-items-center">
    <input placeholder="Storage (3)" class="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"type="text">
    </div>
    </div>
    <div>
    <label class="text-lg text-gray-400">Where</label>
    <div class=" pt-2 grid place-items-center">
    <input placeholder="Clinic 1 (92)" class="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"type="text">
    </div>
    </div>
    <div>
    <label class="text-lg text-gray-400">Product</label>
    <div class="pt-2 grid place-items-center">
    <input placeholder="Traumel S (131231)" class="w-72 py-1 px-2 border rounded-md border-gray-400"type="number">
    </div>
    </div>
    <div>
    <label class="text-lg text-gray-400">Quantity</label>
    <div class=" pt-2 grid place-items-center">
    <input placeholder="150" class="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400" type="text">
    </div>
    </div>
    <div>
    <label class="text-lg text-gray-400">Date</label>
    <div class=" pt-2 grid place-items-center">
    <input value="<?php print date('Y'); ?>-<?php print date('m'); ?>-<?php print date('d'); ?>" class="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400" type="date">
    </div>
    </div>
    <div class="pt-4 grid place-items-center">
    <button type="button" class="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2">Create Product</button>
    </div>
</form>
</div>