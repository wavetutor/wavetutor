<template>
    <button :id="`button-${id}`" class="rounded-lg shadow w-36 h-36 mx-auto">
        <img :src="image" alt="Tutor photo" class="rounded-lg hover:scale-110 transition">
    </button>
    
    <div :id="`modal-${id}`" tabindex="-1" class="fixed right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 max-h-full h-screen place-items-center bg-zinc-900/70">
        <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-zinc-800 md:p-8">
                <span :class="`modalClose-${id}`" class="fill-zinc-900 hover:fill-gray-400 dark:fill-white flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></span>
                <div class="mb-4 text-sm font-light text-black dark:text-gray-400">
                    <img :src="image" alt="Tutor photo" class="w-36 h-36 rounded-lg mx-auto mb-2">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white text-center">{{ name }}</h2>
                    <p class="mb-4 font-light">{{ bio }}</p>
                    <p class="mb-4 font-medium"> Accomplishments: </p>
                    <ul class="mb-4 font-light ml-2" style="list-style-type: disc;">
                        <li v-for="accomplishment in accomplishments" :key="accomplishment">{{ accomplishment }}</li>
                    </ul>
                    <p class="mb-4 font-medium"> Subjects: </p>
                    <ul class="mb-4 font-light ml-2" style="list-style-type: disc;">
                        <li v-for="subject in subjects" :key="subject">{{ subject }}</li>
                    </ul>

                </div>
            </div>
        </div>
    </div> 
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import vedanti from "../assets/credits/vedanti.png";
import nikhil from "../assets/credits/nikhil.jpg";
import rishabh from "../assets/credits/rishabh.jpg";
import aaron from "../assets/credits/aaron.jpg";

var image = "";

const props = defineProps<{
    id: any,
    name: string,
    bio: string,
    picture: string,
    accomplishments: string[],
    subjects: string[],
}>();

switch(props.id) {
    case "vedanti":
        image = vedanti;
        break;
    case "nikhil":
        image = nikhil;
        break;
    case "rishabh":
        image = rishabh;
        break;
    case "aaron":
        image = aaron;
        break;
    default:
        image = props.picture;
        break;
}


onMounted(() => {
    document.getElementById(`first-${props.id}`)?.setAttribute("src", image);
    document.getElementById(`second-${props.id}`)?.setAttribute("src", image);
    const id = props.id;
    const buttonID = document.getElementById(`button-${id}`);
    const modalID = document.getElementById(`modal-${id}`);
    const modalCloseID = document.getElementsByClassName(`modalClose-${id}`);

    buttonID?.addEventListener("click", function() {
        console.log("clicked");
        modalID?.classList.remove("hidden");
        modalID?.classList.add("grid");
    });
    for (let i = 0; i < modalCloseID.length; i++) {
        modalCloseID[i].addEventListener("click", function() {
            modalID?.classList.remove("grid");
            modalID?.classList.add("hidden");
        });
    }
});
</script>