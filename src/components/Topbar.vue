<template>
<nav class="bg-indigo-500">
    <div class="container py-2 mx-auto px-10 flex flex-wrap items-center justify-between">
        
        <!-- BEGIN logo -->
        <div  class="flex items-center">
            <img src="/src/assets/logou2.png" class="h-14">
            <h2 class="text-white">Universidad de Córdoba</h2>
        </div>
        <!-- END logo -->


        <!-- ENG Botón responsive -->
        <button @click="hideShow" id="bntResponsive" class="p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white" data-collapse-toggle="mobile-menu" type="button"  aria-controls="mobile-menu" aria-expanded="false">
            <svg id="iconOpen" class="text-white w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg id="iconClose" class="text-white hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <!-- END Botón responsive -->


        <!-- BEGIN items adicionales -->
        <div class="hidden md:block md:w-auto w-full " id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <router-link to="/" href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/nosotros" href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Nosotros</router-link>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Cursos</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Precios</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contactenos</a>
                </li>
            </ul>
          </div>
        <!-- END items adicionales -->
        
        
    </div>
</nav>
</template>

<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        hideShow() {
            // if (menuResponsive.classList.contains('hidden')) {
			// 	menuResponsive.classList.remove('hidden');
            //     btnOpen.classList.add('hidden');
            //     btnClose.classList.remove('hidden');
			// } else {
			// 	menuResponsive.classList.add('hidden');
            //     btnClose.classList.add('hidden');
            //     btnOpen.classList.remove('hidden');
			// }
        },
    },
}

        // var menuResponsive = document.getElementById('mobile-menu');
        // var btnOpen = document.getElementById('iconOpen');
        // var btnClose = document.getElementById('iconClose');

        // function hideShow() {
		// 	if (menuResponsive.classList.contains('hidden')) {
		// 		menuResponsive.classList.remove('hidden');
        //         btnOpen.classList.add('hidden');
        //         btnClose.classList.remove('hidden');
		// 	} else {
		// 		menuResponsive.classList.add('hidden');
        //         btnClose.classList.add('hidden');
        //         btnOpen.classList.remove('hidden');
		// 	}
		// }

        // const btnMenu = document.getElementById('bntResponsive');
        // btnMenu.addEventListener('click', hideShow)
</script>