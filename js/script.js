document.addEventListener('DOMContentLoaded', function() {
    // Configuração inicial - mostrar apenas a página de login
    const loginPage = document.getElementById('login-page');
    const mainApp = document.getElementById('main-app');
    const placeDetails = document.getElementById('place-details');
    const routePanel = document.getElementById('route-panel');
    
    // Dados de exemplo para os estabelecimentos
    const places = [
        // Farmácias
        { id: 1, name: 'Farmácia Nova Esperança', type: 'farmacia', typeText: 'Farmácia', lat: -8.9135, lng: 13.2003, address: 'Rua da Liberdade, 123, Viana', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: '10:00 - 14:00' } },
        { id: 2, name: 'Farmácia Popular', type: 'farmacia', typeText: 'Farmácia', lat: -8.9175, lng: 13.2053, address: 'Avenida 21 de Janeiro, 45, Viana', hours: { weekday: '08:00 - 19:00', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        { id: 3, name: 'Farmácia Saúde Total', type: 'farmacia', typeText: 'Farmácia', lat: -8.9195, lng: 13.1983, address: 'Rua dos Combatentes, 78, Viana', hours: { weekday: '07:30 - 21:00', saturday: '08:00 - 20:00', sunday: '09:00 - 15:00' } },
        { id: 4, name: 'Farmácia Central', type: 'farmacia', typeText: 'Farmácia', lat: -8.9225, lng: 13.2103, address: 'Rua do Comércio, 32, Estalagem', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: 'Fechado' } },
        { id: 5, name: 'Farmácia Vida', type: 'farmacia', typeText: 'Farmácia', lat: -8.9155, lng: 13.2153, address: 'Avenida Manuel Van-Dúnem, 67, Estalagem', hours: { weekday: '08:30 - 19:30', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        { id: 6, name: 'Farmácia Luanda', type: 'farmacia', typeText: 'Farmácia', lat: -8.9275, lng: 13.1953, address: 'Rua da Paz, 12, Luanda Sul', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: '10:00 - 14:00' } },
        { id: 7, name: 'Farmácia Bem-Estar', type: 'farmacia', typeText: 'Farmácia', lat: -8.9305, lng: 13.2003, address: 'Avenida Ho Chi Minh, 54, Luanda Sul', hours: { weekday: '07:00 - 22:00', saturday: '08:00 - 20:00', sunday: '09:00 - 18:00' } },
        { id: 8, name: 'Farmácia São João', type: 'farmacia', typeText: 'Farmácia', lat: -8.9185, lng: 13.1903, address: 'Rua dos Coqueiros, 89, Viana', hours: { weekday: '08:00 - 19:00', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        { id: 9, name: 'Farmácia Moderna', type: 'farmacia', typeText: 'Farmácia', lat: -8.9235, lng: 13.1853, address: 'Avenida Deolinda Rodrigues, 23, Viana', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: '10:00 - 14:00' } },
        { id: 10, name: 'Farmácia Esperança', type: 'farmacia', typeText: 'Farmácia', lat: -8.9285, lng: 13.2103, address: 'Rua da Samba, 45, Estalagem', hours: { weekday: '08:30 - 19:30', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        { id: 11, name: 'Farmácia Angolana', type: 'farmacia', typeText: 'Farmácia', lat: -8.9335, lng: 13.2053, address: 'Avenida Revolução de Outubro, 67, Estalagem', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: '10:00 - 14:00' } },
        { id: 12, name: 'Farmácia Talatona', type: 'farmacia', typeText: 'Farmácia', lat: -8.9355, lng: 13.1953, address: 'Rua Direita do Talatona, 34, Luanda Sul', hours: { weekday: '07:30 - 21:00', saturday: '08:00 - 20:00', sunday: '09:00 - 15:00' } },
        { id: 13, name: 'Farmácia Belas', type: 'farmacia', typeText: 'Farmácia', lat: -8.9375, lng: 13.2003, address: 'Avenida Pedro de Castro Van-Dúnem, 12, Luanda Sul', hours: { weekday: '08:00 - 19:00', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        { id: 14, name: 'Farmácia Benfica', type: 'farmacia', typeText: 'Farmácia', lat: -8.9395, lng: 13.2053, address: 'Rua do Benfica, 56, Luanda Sul', hours: { weekday: '08:00 - 20:00', saturday: '09:00 - 18:00', sunday: '10:00 - 14:00' } },
        { id: 15, name: 'Farmácia Futuro', type: 'farmacia', typeText: 'Farmácia', lat: -8.9415, lng: 13.1953, address: 'Avenida 4 de Fevereiro, 78, Viana', hours: { weekday: '08:30 - 19:30', saturday: '09:00 - 17:00', sunday: 'Fechado' } },
        
        // Cantinas
        { id: 16, name: 'Cantina Sabor Caseiro', type: 'cantina', typeText: 'Cantina', lat: -8.9145, lng: 13.2023, address: 'Rua das Acácias, 23, Viana', hours: { weekday: '10:00 - 22:00', saturday: '10:00 - 23:00', sunday: '12:00 - 20:00' } },
        { id: 17, name: 'Cantina Dona Maria', type: 'cantina', typeText: 'Cantina', lat: -8.9185, lng: 13.2073, address: 'Avenida Comandante Valódia, 45, Viana', hours: { weekday: '11:00 - 21:00', saturday: '11:00 - 22:00', sunday: '12:00 - 19:00' } },
        { id: 18, name: 'Cantina Tradicional', type: 'cantina', typeText: 'Cantina', lat: -8.9205, lng: 13.2003, address: 'Rua do Kiluanje, 67, Viana', hours: { weekday: '10:30 - 22:30', saturday: '10:30 - 23:30', sunday: '12:00 - 20:00' } },
        { id: 19, name: 'Cantina Bom Apetite', type: 'cantina', typeText: 'Cantina', lat: -8.9235, lng: 13.2123, address: 'Rua dos Funantes, 34, Estalagem', hours: { weekday: '11:00 - 21:00', saturday: '11:00 - 22:00', sunday: '12:00 - 19:00' } },
        { id: 20, name: 'Cantina Paladar', type: 'cantina', typeText: 'Cantina', lat: -8.9165, lng: 13.2173, address: 'Avenida Ngola Kiluanje, 56, Estalagem', hours: { weekday: '10:00 - 22:00', saturday: '10:00 - 23:00', sunday: '12:00 - 20:00' } },
        { id: 21, name: 'Cantina Sul', type: 'cantina', typeText: 'Cantina', lat: -8.9285, lng: 13.1973, address: 'Rua do Patriota, 78, Luanda Sul', hours: { weekday: '10:30 - 22:30', saturday: '10:30 - 23:30', sunday: '12:00 - 20:00' } },
        { id: 22, name: 'Cantina Familiar', type: 'cantina', typeText: 'Cantina', lat: -8.9315, lng: 13.2023, address: 'Avenida 21 de Janeiro, 90, Luanda Sul', hours: { weekday: '11:00 - 21:00', saturday: '11:00 - 22:00', sunday: '12:00 - 19:00' } },
        { id: 23, name: 'Cantina Delícia', type: 'cantina', typeText: 'Cantina', lat: -8.9195, lng: 13.1923, address: 'Rua dos Militares, 12, Viana', hours: { weekday: '10:00 - 22:00', saturday: '10:00 - 23:00', sunday: '12:00 - 20:00' } },
        { id: 24, name: 'Cantina Angolana', type: 'cantina', typeText: 'Cantina', lat: -8.9245, lng: 13.1873, address: 'Avenida Hoji ya Henda, 34, Viana', hours: { weekday: '10:30 - 22:30', saturday: '10:30 - 23:30', sunday: '12:00 - 20:00' } },
        { id: 25, name: 'Cantina Estalagem', type: 'cantina', typeText: 'Cantina', lat: -8.9295, lng: 13.2123, address: 'Rua da Estalagem, 56, Estalagem', hours: { weekday: '11:00 - 21:00', saturday: '11:00 - 22:00', sunday: '12:00 - 19:00' } },
        
        // Supermercados
        { id: 26, name: 'Supermercado Kero', type: 'supermercado', typeText: 'Supermercado', lat: -8.9155, lng: 13.2033, address: 'Avenida 21 de Janeiro, 100, Viana', hours: { weekday: '08:00 - 22:00', saturday: '08:00 - 22:00', sunday: '09:00 - 20:00' } },
        { id: 27, name: 'Supermercado Shoprite', type: 'supermercado', typeText: 'Supermercado', lat: -8.9195, lng: 13.2083, address: 'Rua do Comércio, 78, Viana', hours: { weekday: '08:00 - 21:00', saturday: '08:00 - 21:00', sunday: '09:00 - 19:00' } },
        { id: 28, name: 'Supermercado Alimenta Angola', type: 'supermercado', typeText: 'Supermercado', lat: -8.9215, lng: 13.2013, address: 'Avenida Pedro de Castro Van-Dúnem, 45, Viana', hours: { weekday: '08:30 - 21:30', saturday: '08:30 - 21:30', sunday: '09:00 - 19:00' } },
        { id: 29, name: 'Supermercado Nosso Super', type: 'supermercado', typeText: 'Supermercado', lat: -8.9245, lng: 13.2133, address: 'Rua da Liberdade, 23, Estalagem', hours: { weekday: '08:00 - 22:00', saturday: '08:00 - 22:00', sunday: '09:00 - 20:00' } },
        { id: 30, name: 'Supermercado Maxi', type: 'supermercado', typeText: 'Supermercado', lat: -8.9175, lng: 13.2183, address: 'Avenida Revolução de Outubro, 67, Estalagem', hours: { weekday: '08:00 - 21:00', saturday: '08:00 - 21:00', sunday: '09:00 - 19:00' } },
        { id: 31, name: 'Supermercado Casa dos Frescos', type: 'supermercado', typeText: 'Supermercado', lat: -8.9295, lng: 13.1983, address: 'Rua do Patriota, 89, Luanda Sul', hours: { weekday: '08:30 - 21:30', saturday: '08:30 - 21:30', sunday: '09:00 - 19:00' } },
        { id: 32, name: 'Supermercado Candando', type: 'supermercado', typeText: 'Supermercado', lat: -8.9325, lng: 13.2033, address: 'Avenida Deolinda Rodrigues, 12, Luanda Sul', hours: { weekday: '08:00 - 22:00', saturday: '08:00 - 22:00', sunday: '09:00 - 20:00' } },
        { id: 33, name: 'Supermercado Jumbo', type: 'supermercado', typeText: 'Supermercado', lat: -8.9205, lng: 13.1933, address: 'Rua dos Coqueiros, 34, Viana', hours: { weekday: '08:00 - 21:00', saturday: '08:00 - 21:00', sunday: '09:00 - 19:00' } },
        { id: 34, name: 'Supermercado Mega', type: 'supermercado', typeText: 'Supermercado', lat: -8.9255, lng: 13.1883, address: 'Avenida Ho Chi Minh, 56, Viana', hours: { weekday: '08:30 - 21:30', saturday: '08:30 - 21:30', sunday: '09:00 - 19:00' } },
        { id: 35, name: 'Supermercado Bem Me Quer', type: 'supermercado', typeText: 'Supermercado', lat: -8.9305, lng: 13.2133, address: 'Rua da Samba, 78, Estalagem', hours: { weekday: '08:00 - 22:00', saturday: '08:00 - 22:00', sunday: '09:00 - 20:00' } },
        { id: 36, name: 'Supermercado Luanda', type: 'supermercado', typeText: 'Supermercado', lat: -8.9345, lng: 13.2083, address: 'Avenida Comandante Valódia, 90, Estalagem', hours: { weekday: '08:00 - 21:00', saturday: '08:00 - 21:00', sunday: '09:00 - 19:00' } },
        { id: 37, name: 'Supermercado Frescos do Dia', type: 'supermercado', typeText: 'Supermercado', lat: -8.9365, lng: 13.1983, address: 'Rua Direita do Talatona, 12, Luanda Sul', hours: { weekday: '08:30 - 21:30', saturday: '08:30 - 21:30', sunday: '09:00 - 19:00' } },
        { id: 38, name: 'Supermercado Belas Shopping', type: 'supermercado', typeText: 'Supermercado', lat: -8.9385, lng: 13.2033, address: 'Avenida 4 de Fevereiro, 34, Luanda Sul', hours: { weekday: '08:00 - 22:00', saturday: '08:00 - 22:00', sunday: '09:00 - 20:00' } },
        { id: 39, name: 'Supermercado Viana', type: 'supermercado', typeText: 'Supermercado', lat: -8.9405, lng: 13.2083, address: 'Rua do Kiluanje, 56, Viana', hours: { weekday: '08:00 - 21:00', saturday: '08:00 - 21:00', sunday: '09:00 - 19:00' } },
        { id: 40, name: 'Supermercado Sul', type: 'supermercado', typeText: 'Supermercado', lat: -8.9425, lng: 13.1983, address: 'Avenida Ngola Kiluanje, 78, Luanda Sul', hours: { weekday: '08:30 - 21:30', saturday: '08:30 - 21:30', sunday: '09:00 - 19:00' } },
        
        // Mercados
        { id: 41, name: 'Mercado do Povo', type: 'mercado', typeText: 'Mercado', lat: -8.9165, lng: 13.2043, address: 'Rua das Acácias, 45, Viana', hours: { weekday: '06:00 - 18:00', saturday: '06:00 - 18:00', sunday: '07:00 - 15:00' } },
        { id: 42, name: 'Mercado Municipal de Viana', type: 'mercado', typeText: 'Mercado', lat: -8.9205, lng: 13.2093, address: 'Avenida 21 de Janeiro, 67, Viana', hours: { weekday: '06:00 - 17:00', saturday: '06:00 - 17:00', sunday: '07:00 - 14:00' } },
        { id: 43, name: 'Mercado dos Kwanzas', type: 'mercado', typeText: 'Mercado', lat: -8.9225, lng: 13.2023, address: 'Rua dos Combatentes, 89, Viana', hours: { weekday: '06:30 - 17:30', saturday: '06:30 - 17:30', sunday: '07:00 - 14:00' } },
        { id: 44, name: 'Mercado Estalagem', type: 'mercado', typeText: 'Mercado', lat: -8.9255, lng: 13.2143, address: 'Rua do Comércio, 12, Estalagem', hours: { weekday: '06:00 - 18:00', saturday: '06:00 - 18:00', sunday: '07:00 - 15:00' } },
        { id: 45, name: 'Mercado Popular', type: 'mercado', typeText: 'Mercado', lat: -8.9185, lng: 13.2193, address: 'Avenida Manuel Van-Dúnem, 34, Estalagem', hours: { weekday: '06:00 - 17:00', saturday: '06:00 - 17:00', sunday: '07:00 - 14:00' } },
        { id: 46, name: 'Mercado Luanda Sul', type: 'mercado', typeText: 'Mercado', lat: -8.9305, lng: 13.1993, address: 'Rua da Paz, 56, Luanda Sul', hours: { weekday: '06:30 - 17:30', saturday: '06:30 - 17:30', sunday: '07:00 - 14:00' } },
        { id: 47, name: 'Mercado dos Frescos', type: 'mercado', typeText: 'Mercado', lat: -8.9335, lng: 13.2043, address: 'Avenida Ho Chi Minh, 78, Luanda Sul', hours: { weekday: '06:00 - 18:00', saturday: '06:00 - 18:00', sunday: '07:00 - 15:00' } },
        { id: 48, name: 'Mercado 30', type: 'mercado', typeText: 'Mercado', lat: -8.9215, lng: 13.1943, address: 'Rua dos Coqueiros, 90, Viana', hours: { weekday: '06:00 - 17:00', saturday: '06:00 - 17:00', sunday: '07:00 - 14:00' } },
        { id: 49, name: 'Mercado Benfica', type: 'mercado', typeText: 'Mercado', lat: -8.9265, lng: 13.1893, address: 'Avenida Deolinda Rodrigues, 12, Viana', hours: { weekday: '06:30 - 17:30', saturday: '06:30 - 17:30', sunday: '07:00 - 14:00' } },
        { id: 50, name: 'Mercado Roque Santeiro', type: 'mercado', typeText: 'Mercado', lat: -8.9315, lng: 13.2143, address: 'Rua da Samba, 34, Estalagem', hours: { weekday: '06:00 - 18:00', saturday: '06:00 - 18:00', sunday: '07:00 - 15:00' } }
    ];
    
    // Formulário de login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            document.getElementById('user-email').textContent = email;
            loginPage.classList.add('hidden');
            mainApp.classList.remove('hidden');
            initializeMap();
        }
    });
    
    // Inicializar o mapa
    let map;
    let markers = [];
    let userMarker;
    let routeLine;
    
    function initializeMap() {
        // Coordenadas centrais de Luanda (aproximadas)
        const luandaCoords = [-8.9246, 13.2044];
        
        // Inicializar o mapa
        map = L.map('map').setView(luandaCoords, 13);
        
        // Adicionar camada de mapa base (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Adicionar marcadores para cada local
        addMarkersToMap();
        
        // Preencher a lista de locais
        populatePlacesList();
        
        // Configurar filtros
        setupFilters();
        
        // Configurar busca
        setupSearch();
        
        // Configurar botão de localização
        setupLocationButton();
    }
    
    function addMarkersToMap() {
        places.forEach(place => {
            let markerIcon;
            
            // Definir ícones personalizados por tipo
            switch(place.type) {
                case 'farmacia':
                    markerIcon = L.divIcon({
                        html: '<div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"><i class="ri-medicine-bottle-line text-white"></i></div>',
                        className: 'marker-farmacia',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    break;
                case 'cantina':
                    markerIcon = L.divIcon({
                        html: '<div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center"><i class="ri-restaurant-line text-white"></i></div>',
                        className: 'marker-cantina',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    break;
                case 'supermercado':
                    markerIcon = L.divIcon({
                        html: '<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><i class="ri-shopping-cart-line text-white"></i></div>',
                        className: 'marker-supermercado',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    break;
                case 'mercado':
                    markerIcon = L.divIcon({
                        html: '<div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"><i class="ri-store-line text-white"></i></div>',
                        className: 'marker-mercado',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    break;
            }
            
            // Criar marcador
            const marker = L.marker([place.lat, place.lng], { icon: markerIcon });
            
            // Adicionar evento de clique
            marker.on('click', function() {
                showPlaceDetails(place);
            });
            
            // Adicionar ao mapa
            marker.addTo(map);
            
            // Armazenar referência ao marcador
            markers.push({ id: place.id, marker: marker, type: place.type });
        });
    }
    
    function populatePlacesList() {
        const placesList = document.getElementById('places-list');
        placesList.innerHTML = '';
        
        places.forEach(place => {
            let iconClass = '';
            let bgColorClass = '';
            
            switch(place.type) {
                case 'farmacia':
                    iconClass = 'ri-medicine-bottle-line';
                    bgColorClass = 'bg-red-500';
                    break;
                case 'cantina':
                    iconClass = 'ri-restaurant-line';
                    bgColorClass = 'bg-amber-500';
                    break;
                case 'supermercado':
                    iconClass = 'ri-shopping-cart-line';
                    bgColorClass = 'bg-blue-500';
                    break;
                case 'mercado':
                    iconClass = 'ri-store-line';
                    bgColorClass = 'bg-emerald-500';
                    break;
            }
            
            const placeItem = document.createElement('div');
            placeItem.className = `p-3 hover:bg-gray-50 rounded cursor-pointer mb-1 place-item ${place.type}`;
            placeItem.dataset.id = place.id;
            placeItem.innerHTML = `
                <div class="flex items-center">
                    <div class="w-8 h-8 ${bgColorClass} rounded-full flex items-center justify-center mr-3">
                        <i class="${iconClass} text-white"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-gray-800 font-medium truncate">${place.name}</h3>
                        <p class="text-gray-500 text-sm truncate">${place.address.split(',')[1]}</p>
                    </div>
                    <div class="text-xs text-gray-500 whitespace-nowrap ml-2">2,3 km</div>
                </div>
            `;
            
            placeItem.addEventListener('click', function() {
                // Centralizar o mapa no local
                map.setView([place.lat, place.lng], 15);
                
                // Mostrar detalhes do local
                showPlaceDetails(place);
            });
            
            placesList.appendChild(placeItem);
        });
    }
    
    function setupFilters() {
        const filterFarmacia = document.getElementById('filter-farmacia');
        const filterCantina = document.getElementById('filter-cantina');
        const filterSupermercado = document.getElementById('filter-supermercado');
        const filterMercado = document.getElementById('filter-mercado');
        
        // Função para filtrar marcadores e lista
        function filterMarkers() {
            const showFarmacia = filterFarmacia.checked;
            const showCantina = filterCantina.checked;
            const showSupermercado = filterSupermercado.checked;
            const showMercado = filterMercado.checked;
            
            // Filtrar marcadores
            markers.forEach(markerObj => {
                if (
                    (markerObj.type === 'farmacia' && showFarmacia) ||
                    (markerObj.type === 'cantina' && showCantina) ||
                    (markerObj.type === 'supermercado' && showSupermercado) ||
                    (markerObj.type === 'mercado' && showMercado)
                ) {
                    map.addLayer(markerObj.marker);
                } else {
                    map.removeLayer(markerObj.marker);
                }
            });
            
            // Filtrar lista
            const placeItems = document.querySelectorAll('.place-item');
            placeItems.forEach(item => {
                const type = item.classList[4]; // A classe do tipo está na posição 4
                if (
                    (type === 'farmacia' && showFarmacia) ||
                    (type === 'cantina' && showCantina) ||
                    (type === 'supermercado' && showSupermercado) ||
                    (type === 'mercado' && showMercado)
                ) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        // Adicionar event listeners
        filterFarmacia.addEventListener('change', filterMarkers);
        filterCantina.addEventListener('change', filterMarkers);
        filterSupermercado.addEventListener('change', filterMarkers);
        filterMercado.addEventListener('change', filterMarkers);
    }
    
    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Filtrar lista
            const placeItems = document.querySelectorAll('.place-item');
            placeItems.forEach(item => {
                const placeName = item.querySelector('h3').textContent.toLowerCase();
                const placeAddress = item.querySelector('p').textContent.toLowerCase();
                
                if (placeName.includes(searchTerm) || placeAddress.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    function setupLocationButton() {
        const locationButton = document.getElementById('my-location-btn');
        
        locationButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    
                    // Centralizar o mapa na localização do usuário
                    map.setView([userLat, userLng], 15);
                    
                    // Adicionar marcador para a localização do usuário
                    if (userMarker) {
                        map.removeLayer(userMarker);
                    }
                    
                    const userIcon = L.divIcon({
                        html: '<div class="location-pulse"></div>',
                        className: '',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    });
                    
                    userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(map);
                    
                    // Atualizar texto da localização atual
                    document.getElementById('current-location').textContent = 'Sua localização atual';
                }, function(error) {
                    alert('Não foi possível obter sua localização. Por favor, verifique suas permissões de localização.');
                });
            } else {
                alert('Seu navegador não suporta geolocalização.');
            }
        });
    }
    
    function showPlaceDetails(place) {
        // Preencher o modal com os detalhes do local
        document.getElementById('modal-title').textContent = place.name;
        document.getElementById('modal-type').textContent = place.typeText;
        document.getElementById('modal-address').textContent = place.address;
        document.getElementById('modal-weekday').textContent = place.hours.weekday;
        document.getElementById('modal-saturday').textContent = place.hours.saturday;
        document.getElementById('modal-sunday').textContent = place.hours.sunday;
        
        // Definir o ícone e cor do tipo
        const modalIcon = document.getElementById('modal-icon');
        let iconClass = '';
        let bgColorClass = '';
        
        switch(place.type) {
            case 'farmacia':
                iconClass = 'ri-medicine-bottle-line';
                bgColorClass = 'bg-red-500';
                break;
            case 'cantina':
                iconClass = 'ri-restaurant-line';
                bgColorClass = 'bg-amber-500';
                break;
            case 'supermercado':
                iconClass = 'ri-shopping-cart-line';
                bgColorClass = 'bg-blue-500';
                break;
            case 'mercado':
                iconClass = 'ri-store-line';
                bgColorClass = 'bg-emerald-500';
                break;
        }
        
        modalIcon.className = `w-8 h-8 rounded-full flex items-center justify-center mr-3 ${bgColorClass}`;
        modalIcon.innerHTML = `<i class="${iconClass} text-white"></i>`;
        
        // Configurar o botão de rota
        const routeBtn = document.getElementById('route-btn');
        routeBtn.onclick = function() {
            showRoute(place);
        };
        
        // Exibir o modal
        placeDetails.classList.remove('hidden');
    }
    
    function showRoute(place) {
        // Fechar o modal de detalhes
        placeDetails.classList.add('hidden');
        
        // Preencher o painel de rota
        document.getElementById('route-destination').textContent = place.name;
        
        // Simular cálculo de rota
        const distance = (Math.random() * 5 + 1).toFixed(1);
        const time = Math.round(distance * 5);
        
        document.getElementById('route-distance').textContent = `${distance} km`;
        document.getElementById('route-time').textContent = `${time} min`;
        
        // Desenhar uma linha de rota simulada
        if (userMarker && routeLine) {
            map.removeLayer(routeLine);
        }
        
        if (userMarker) {
            const userLatLng = userMarker.getLatLng();
            const placeLatLng = L.latLng(place.lat, place.lng);
            
            routeLine = L.polyline([userLatLng, placeLatLng], {
                color: '#3B82F6',
                weight: 4,
                opacity: 0.7,
                dashArray: '10, 10'
            }).addTo(map);
            
            // Ajustar a visualização para mostrar toda a rota
            map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
        }
        
        // Exibir o painel de rota
        routePanel.style.transform = 'translateX(0)';
    }
    
    // Configurar botões de fechar
    document.getElementById('close-modal').addEventListener('click', function() {
        placeDetails.classList.add('hidden');
    });
    
    document.getElementById('close-route').addEventListener('click', function() {
        routePanel.style.transform = 'translateX(100%)';
        if (routeLine) {
            map.removeLayer(routeLine);
            routeLine = null;
        }
    });
});