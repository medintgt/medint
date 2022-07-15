<!-- Title and breadcums -->
<section class="container mx-auto flex justify-between p-4">
    <h1 class="text-2xl"><?php print(title[1]);?></h1>
    <span class="text-xl flex items-center cursor-pointer"><i class="fi fi-rr-arrow-left grid place-items-center pr-2"></i>Dashboard</span>
</section>

<div class="container mx-auto grid justify-center">
<!-- All data tools -->
<section class="my-4 max-w-md  md:w-96 h-auto p-3 flex justify-between">
        <div class="cursor-pointer"><h2 class="text-2xl"><i class="fi-rr-cloud-download pr-2"></i>Export</h2></div>
        <div class="cursor-pointer"><h2 class="text-2xl">Filters<i class="fi-rr-settings-sliders pl-2"></i></h2></div>
</section>
<!-- Show all products -->
<section class="my-4 max-w-md md:w-96 p-3">
<ul>
<?php
        $a = 0;
        while ($a <= 25) {
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
</div>