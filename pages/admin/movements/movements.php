        <!-- Title and breadcums -->
        <section class="container mx-auto flex justify-between p-4">
    <h1 class="text-2xl"><?php print(title[0]);?></h1>
    <a href="http://<?php print ($_SERVER['SERVER_NAME']);?>"><span class="text-xl flex items-center cursor-pointer"><i class="fi fi-rr-arrow-left grid place-items-center pr-2"></i>Dashboard</span></a>
</section>
<!-- Search Patients -->
<div class="container mx-auto grid justify-center">
<section class="my-4 max-w-md  md:w-96 h-auto bg-white shadow-2xl p-3 rounded-md">
    <h2 class="text-xl">Search Movement</h2>
    <div class=" pt-2 grid place-items-center">
    <input placeholder="Search by code..." class="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"type="text">
    </div>
</section>

<!-- Important info about Products -->
<section class="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
<div class="text-xl flex justify-between">
    <h2>Recent Created</h2>
    <h2 class="flex justify-center items-center "><i class="fi-rr-angle-small-left grid place-items-center px-4 cursor-pointer"></i>Today<i class="fi-rr-angle-small-right grid place-items-center px-4 cursor-pointer"></i></h2>
</div>    
<ul>
<?php
        $a = 0;
        while ($a <= 10) {
            $randomNumber = rand(100000000,999999999);
            $randomNumber2 = rand(10000,99999);
            print('
        <li class="text-lg flex justify-between text-sky-800 px-4 py-1"><span class="cursor-pointer">'.
      $randomNumber
      .'</span><span class="cursor-pointer">User ('.$randomNumber2.')</span></li>
        ');
        $a += 1;
        };
        ?>
    </ul>
</section>
<div class="container">
    <p class="text-sky-800 cursor-pointer py-4">Show all movements</p>
</div>
</div>
<!-- Quick actions button -->
<button class="cursor-pointer fixed bottom-10 right-10 text-4xl bg-sky-800 p-2.5 w-14 h-14 rounded-full text-white text-center grid place-items-center">
<i class="fi-rr-plus-small"></i>
</button>
<div class='hidden flex relative'>
                <ul
                        class='z-10 fixed bottom-28 p-4 w-72 right-10 h-auto pb-10 shadow-2x1 list-none
                        flex flex-col justify-start rounded-md bg-white shadow-2xl'
                    >
                    <li class='text-lg cursor-pointer px-2'>
                        <i class="fi-rr-calendar pr-2"></i> New appointment
                    </li>
                    <li class='my-2 text-lg cursor-pointer px-2'>
                        <i class="fi-rr-stethoscope pr-2"></i> New Therapy
                    </li>
                    <li class='my-2 text-lg cursor-pointer px-2'>
                        <i class="fi-rr-layers pr-2"></i> New Data
                    </li>
                    <li class='my-2 text-lg cursor-pointer px-2'>
                        <i class="fi-rr-pharmacy pr-2"></i> New Movement
                    </li>
                    <li class='my-2 text-lg cursor-pointer px-2'>
                        <i class="fi-rr-shopping-bag-add pr-2"></i> New Sale
                    </li>
                    <li class='my-2 text-lg cursor-pointer px-2'>
                        <i class="fi-rr-user-add pr-2"></i> New Patient
                    </li>
                    </ul>
            </div>