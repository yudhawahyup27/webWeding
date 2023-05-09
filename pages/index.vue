<script setup>
const config = useAppConfig()
</script>
<template>
    <div>
        <div class="hero  bg-[url('/assets/img/hero.jpg')]  bg-cover   h-screen  w-screen">
            <div class="isi static">
                <h1 class="text-center pt-10  font-bold text-xl text-white  lg:text-2xl ">Our Wedding </h1>

                <h2 class="text-white font-bold absolute inset-x-24  bottom-36 px-auto py-auto text-center md:text-2xl">
                    Yudha
                    & Ima
                </h2>

                <h2 class="text-white font-bold absolute inset-x-24  bottom-28 px-auto py-auto text-center lg:text-2xl">12 .
                    12 .2027
                </h2>
                <nuxt-link to="/invitation">
                    <button
                        class="absolute bottom-10 inset-x-5  mx-auto justify-center bg-black text-white p-4 rounded-full w-40 ">Open
                        Invitation</button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>