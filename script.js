const states = document.querySelectorAll('.state'); // Select all state paths
const tooltip = document.getElementById('tooltip'); // Tooltip to display state names

// Loop over each state and add hover events
states.forEach(state => {
    // When the mouse is over a state
    state.addEventListener('mouseover', function() {
        const stateName = state.getAttribute('data-name'); // Get the state name
        tooltip.innerHTML = stateName; // Set the tooltip content to the state name
        tooltip.style.visibility = 'visible'; // Make the tooltip visible
    });

    // Move the tooltip with the mouse
    state.addEventListener('mousemove', function(e) {
        tooltip.style.top = (e.pageY + 15) + 'px'; // Position the tooltip slightly below the mouse pointer
        tooltip.style.left = (e.pageX + 15) + 'px'; // Position the tooltip slightly to the right of the mouse pointer
    });

    // When the mouse leaves a state
    state.addEventListener('mouseout', function() {
        tooltip.style.visibility = 'hidden'; // Hide the tooltip when the mouse leaves
    });
});


const stateInfo = {
    "Maharashtra": {
        name: "Maharashtra",
        Area: "Area : 307,713 km²",
        Population: "Population : ~124 million",
        Capital: "Capital : Mumbai",
        Official_Language: "Official Language : Marathi",
        Major_Cities: "Major Cities : Pune, Nagpur, Nashik",
        Rivers: "Rivers : Godavari, Krishna",
        Economy: "Economy : Finance, film industry, agriculture",
        Climate: "Climate : Tropical monsoon",
        Tourism: "Tourism : Gateway of India, Ajanta and Ellora caves",
        Cultural_Heritage: "Cultural Heritage : Lavani dance, Ganesh Chaturthi",
        imageUrl: "img/maharashtra.jpg"    
    },
    "andhra-pradesh": {
        name: "Andhra Pradesh",
        Area: "Area : 162,968 km²",
        Population: "Population : ~50 million",
        Capital: "Capital : Amaravati",
        Official_Language: "Official Language : Telugu",
        Major_Cities: "Major Cities : Visakhapatnam, Vijayawada, Tirupati",
        Rivers: "Rivers : Godavari, Krishna",
        Economy: "Economy : Agriculture, IT, and textiles",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Tirupati Temple, Araku Valley",
        Cultural_Heritage: "Cultural Heritage : Kuchipudi dance, festivals like Ugadi",
        imageUrl: "img/Andhra-pradesh.jpg" 
    },
    "Bihar": {
        name: "Bihar",
        Area: "Area : 94,163 km²",
        Population: "Population : ~124 million",
        Capital: "Capital : Patna",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Gaya, Bhagalpur, Muzaffarpur",
        Rivers: "Rivers : Ganges, Kosi, Gandak",
        Economy: "Economy : Agriculture, services",
        Climate: "Climate : Subtropical",
        Tourism: "Tourism : Bodh Gaya, Nalanda University ruins",
        Cultural_Heritage: "Cultural Heritage : Mithila painting, Chhath festival",
        imageUrl: "img/bihar.jpg"
    },
    "Karnataka": {
        name: "Karnataka",
        Area: "Area : 191,791 km²",
        Population: "Population : ~67 million",
        Capital: "Capital : Bengaluru",
        Official_Language: "Official Language : Kannada",
        Major_Cities: "Major Cities : Mysuru, Hubli-Dharwad, Mangalore",
        Rivers: "Rivers : Krishna, Cauvery",
        Economy: "Economy : IT, agriculture, textiles",
        Climate: "Climate : Varies from tropical to temperate",
        Tourism: "Tourism : Hampi, Coorg, Mysore Palace",
        Cultural_Heritage: "Cultural Heritage : Carnatic music, festivals like Dasara",
        imageUrl: "img/karnataka.jpg"
    },
    "Punjab": {
        name: "Punjab",
        Area: "Area : 50,362 km²",
        Population: "Population : ~30 million",
        Capital: "Capital : Chandigarh",
        Official_Language: "Official Language : Punjabi",
        Major_Cities: "Major Cities : Amritsar, Ludhiana, Jalandhar",
        Rivers: "Rivers : Sutlej, Beas, Raviy",
        Economy: "Economy : Agriculture, textiles",
        Climate: "Climate :  Continental",
        Tourism: "Tourism : Golden Temple, Jallianwala Bagh",
        Cultural_Heritage: "Cultural Heritage : Bhangra dance, Vaisakhi festival",
        imageUrl: "img/punjab.jpg"
    },
    "Rajasthan": {
        name: "Rajasthan",
        Area: "Area : 342,239 km²",
        Population: "Population : ~82 million",
        Capital: "Capital : Jaipur",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Udaipur, Jodhpur, Ajmer",
        Rivers: "Rivers : Chambal, Banas",
        Economy: "Economy : Tourism, agriculture, mining",
        Climate: "Climate :  Desert, extreme temperatures",
        Tourism: "Tourism : Hawa Mahal, Thar Desert",
        Cultural_Heritage: "Cultural Heritage : Ghoomar dance, Pushkar Camel Fair",
        imageUrl: "img/rajasthan.jpg"
    },
    "Tamil-Nadu": {
        name: "Tamil Nadu",
        Area: "Area : 130,058 km²",
        Population: "Population : ~80 million",
        Capital: "Capital : Chennai",
        Official_Language: "Official Language : Tamil",
        Major_Cities: "Major Cities : Coimbatore, Madurai, Trichy",
        Rivers: "Rivers : Kaveri, Godavari",
        Economy: "Economy : IT, textiles, agriculture",
        Climate: "Climate :  Tropical",
        Tourism: "Tourism : Meenakshi Temple, Ooty",
        Cultural_Heritage: "Cultural Heritage : Bharatanatyam dance, Pongal festival",
        imageUrl: "img/tamilnadu.jpg"
    },
    "Uttar-Pradesh": {
        name: "Uttar Pradesh",
        Area: "Area : 243,286 km²",
        Population: "Population : ~240 million",
        Capital: "Capital : Lucknow",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Kanpur, Varanasi, Agra",
        Rivers: "Rivers : Ganges, Yamuna",
        Economy: "Economy : Agriculture, manufacturing",
        Climate: "Climate :  Subtropical",
        Tourism: "Tourism : Taj Mahal, Varanasi ghats",
        Cultural_Heritage: "Cultural Heritage : Kathak dance, Holi festival",
        imageUrl: "img/uttarpradesh.jpg"
    },
    "West-Bengal": {
        name: "West Bengal",
        Area: "Area : 88,752 km²",
        Population: "Population : ~91 million",
        Capital: "Capital : Kolkata",
        Official_Language: "Official Language : Bengali",
        Major_Cities: "Major Cities : Siliguri, Asansol, Durgapur",
        Rivers: "Rivers : Ganges, Brahmaputra",
        Economy: "Economy : Agriculture, industry, tea",
        Climate: "Climate :  Tropical monsoon",
        Tourism: "Tourism : Sundarbans, Darjeeling",
        Cultural_Heritage: "Cultural Heritage : Rabindra Sangeet, Durga Puja",
        imageUrl: "img/westbengal.jpg"
    },
    "Gujarat": {
        name: "Gujarat",
        Area: "Area : 196,024 km²",
        Population: "Population : ~63 million",
        Capital: "Capital : Gandhinagar",
        Official_Language: "Official Language : Gujarati",
        Major_Cities: "Major Cities : Ahmedabad, Surat, Vadodara",
        Rivers: "Rivers : Sabarmati, Narmada",
        Economy: "Economy : Industry, agriculture",
        Climate: "Climate : Semi-arid",
        Tourism: "Tourism : Gir National Park, Rann of Kutch",
        Cultural_Heritage: "Cultural Heritage : Garba dance, Navratri festival",
        imageUrl: "img/gujrat.jpg"
    },
    "Haryana": {
        name: "Haryana",
        Area: "Area : 44,212 km²",
        Population: "Population : ~28 million",
        Capital: "Capital : Chandigarh",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Gurgaon, Faridabad, Panipat",
        Rivers: "Rivers : Yamuna, Ghaggar",
        Economy: "Economy : Agriculture, IT, manufacturing",
        Climate: "Climate : Continental",
        Tourism: "Tourism : Sultanpur National Park, Kurukshetra",
        Cultural_Heritage: "Cultural Heritage : Folk dances like Dhamal, Teej festival",
        imageUrl: "img/haryana.jpg"
    },
    "Himachal-Pradesh": {
        name: "Himachal Pradesh",
        Area: "Area : 55,538 km²",
        Population: "Population : ~7 million",
        Capital: "Capital : Shimla",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Dharamshala, Manali, Solan",
        Rivers: "Rivers : Beas, Sutlej",
        Economy: "Economy : Tourism, agriculture, hydropower",
        Climate: "Climate : Varied",
        Tourism: "Tourism : Rohtang Pass, Kullu Valley",
        Cultural_Heritage: "Cultural Heritage : Traditional fairs, Pahari painting",
        imageUrl: "img/himachalpradesh.jpg"
    },
    "Jammu-and-Kashmir": {
        name: "Jammu and Kashmir",
        Area: "Area : 55,538 km²",
        Population: "Population : ~12 million",
        Capital: "Capital : Srinagar (summer), Jammu (winter)",
        Official_Language: "Official Language : Urdu, Hindi, English",
        Major_Cities: "Major Cities : Jammu, Srinagar, Leh",
        Rivers: "Rivers : Jhelum, Chenab",
        Economy: "Economy : Tourism, agriculture",
        Climate: "Climate : Varied",
        Tourism: "Tourism : Dal Lake, Gulmarg",
        Cultural_Heritage: "Cultural Heritage : Kashmiri handicrafts, festivals like Eid",
        imageUrl: "img/jammukashmir.jpg"
    },
    "Jharkhand": {
        name: "Jharkhand",
        Area: "79,714 km²",
        Population: "Population : ~38 million",
        Capital: "Capital : Ranchi",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Jamshedpur, Dhanbad, Bokaro",
        Rivers: "Rivers : Damodar, Subarnarekha",
        Economy: "Economy : Mining, agriculture, manufacturing",
        Climate: "Climate : Tropical wet and dry",
        Tourism: "Tourism : Netarhat, Dalma Wildlife Sanctuary",
        Cultural_Heritage: "Cultural Heritage : Tribal dances, festivals like Sohrai",
        imageUrl: "img/jharkhand.jpg"
    },
    "Kerala": {
        name: "Kerala",
        Area: "38,863 km²",
        Population: "Population : ~35 million",
        Capital: "Capital : Thiruvananthapuram",
        Official_Language: "Official Language : Malayalam",
        Major_Cities: "Major Cities : Kochi, Kozhikode, Kollam",
        Rivers: "Rivers : Periyar, Pamba",
        Economy: "Economy : Tourism, agriculture, remittances",
        Climate: "Climate : Tropical monsoon",
        Tourism: "Tourism : Backwaters of Alleppey, Munnar",
        Cultural_Heritage: "Cultural Heritage : Kathakali dance, Onam festival",
        imageUrl: "img/kerala.jpg"
    },
    "Madhya-Pradesh": {
        name: "Madhya Pradesh",
        Area: "308,350 km²",
        Population: "Population : ~85 million",
        Capital: "Capital : Bhopal",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Indore, Gwalior, Jabalpur",
        Rivers: "Rivers : Narmada, Tapti",
        Economy: "Economy : Agriculture, textiles, minerals",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Khajuraho temples, Kanha National Park",
        Cultural_Heritage: "Cultural Heritage : Folk music, festivals like Navratri",
        imageUrl: "img/madhyapradesh.jpg"
    },
    "Mizoram": {
        name: "Mizoram",
        Area: "21,081 km²",
        Population: "Population : ~1.2 million",
        Capital: "Capital : Aizawl",
        Official_Language: "Official Language : Mizo",
        Major_Cities: "Major Cities : Aizawl, Lunglei, Champhai",
        Rivers: "Rivers : Tuivawl, Tlawng",
        Economy: "Economy : Agriculture, handicrafts",
        Climate: "Climate : Subtropical highland",
        Tourism: "Tourism : Mizoram's hills, Vantawng Falls",
        Cultural_Heritage: "Cultural Heritage : Traditional dances, festivals like Chapchar Kut",
        imageUrl: "img/mizoram.jpg"
    },
    "Nagaland": {
        name: "Nagaland",
        Area: "16,579 km²",
        Population: "Population : ~2 million",
        Capital: "Capital : Kohima",
        Official_Language: "Official Language : English",
        Major_Cities: "Major Cities : Dimapur, Mokokchung, Kohima",
        Rivers: "Rivers : Doyang, Zungki",
        Economy: "Economy : Agriculture, handicrafts",
        Climate: "Climate : Subtropical highland",
        Tourism: "Tourism : Hornbill Festival, Kohima War Cemetery",
        Cultural_Heritage: "Cultural Heritage : Naga tribal culture, traditional crafts",
        imageUrl: "img/nagaland.jpg"
    },
    "Orissa": {
        name: "Orissa",
        Area: "155,707 km²",
        Population: "Population : ~46 million",
        Capital: "Capital : Bhubaneswar",
        Official_Language: "Official Language : Odia",
        Major_Cities: "Major Cities : Cuttack, Rourkela, Berhampur",
        Rivers: "Rivers : Mahanadi, Brahmani",
        Economy: "Economy : Mining, agriculture, tourism",
        Climate: "Climate : Tropical monsoon",
        Tourism: "Tourism : Konark Temple, Chilika Lake",
        Cultural_Heritage: "Cultural Heritage : Odissi dance, festivals like Rath Yatra",
        imageUrl: "img/odisa.jpg"
    },
    "Sikkim": {
        name: "Sikkim",
        Area: "7,096 km²",
        Population: "Population : 610,000",
        Capital: "Capital : Gangtok",
        Official_Language: "Official Language : Nepali, Sikkimese, Hindi, English",
        Major_Cities: "Major Cities : Gangtok, Namchi, Pelling",
        Rivers: "Rivers : Teesta, Rangit",
        Economy: "Economy : Tourism, agriculture, hydropower",
        Climate: "Climate : Varies",
        Tourism: "Tourism : Kanchenjunga, Nathula Pass",
        Cultural_Heritage: "Cultural Heritage : Traditional festivals, Buddhist monasterie",
        imageUrl: "img/sikkim.jpg"
    },
    "Tamil-Nadu": {
        name: "Tamil Nadu",
        Area: "130,058 km²",
        Population: "Population : ~80 million",
        Capital: "Capital : Chennai",
        Official_Language: "Official Language : Tamil",
        Major_Cities: "Major Cities : Coimbatore, Madurai, Trichy",
        Rivers: "Rivers : Kaveri, Godavari",
        Economy: "Economy : IT, textiles, agriculture",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Meenakshi Temple, Ooty",
        Cultural_Heritage: "Cultural Heritage : Bharatanatyam dance, Pongal festival",
        imageUrl: "img/tamilnadu.jpg"
    },
    "telangana": {
        name: "Telangana",
        Area: "112,077 km²",
        Population: "Population : ~39 million",
        Capital: "Capital : Hyderabad",
        Official_Language: "Official Language : Telugu",
        Major_Cities: "Major Cities : Warangal, Khammam, Nizamabad",
        Rivers: "Rivers : Godavari, Krishna",
        Economy: "Economy : IT, agriculture, pharmaceuticals",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Charminar, Golconda Fort",
        Cultural_Heritage: "Cultural Heritage : Bathukamma festival, traditional cuisine",
        imageUrl: "img/telangana.jpg"
    },
    "Tripura": {
        name: "Tripura",
        Area: "10,491 km²",
        Population: "Population : ~4 million",
        Capital: "Capital : Agartala",
        Official_Language: "Official Language : Bengali, Kokborok",
        Major_Cities: "Major Cities : Agartala, Ambassa, Udaipur",
        Rivers: "Rivers : Howrah, Gumti",
        Economy: "Economy : Agriculture, handicrafts",
        Climate: "Climate : Tropical monsoon",
        Tourism: "Tourism : Neermahal, Tripura Sundari Temple",
        Cultural_Heritage: "Cultural Heritage : Tribal festivals, handicrafts",
        imageUrl: "img/tripura.jpg"
    },
    "Uttarakhand": {
        name: "Uttarakhand",
        Area: "53,483 km²",
        Population: "Population : ~11 million",
        Capital: "Capital : Dehradun",
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Haridwar, Nainital, Rishikesh",
        Rivers: "Rivers : Ganges, Yamuna",
        Economy: "Economy : Tourism, agriculture, hydroelectricity",
        Climate: "Climate : Varies",
        Tourism: "Tourism : Jim Corbett National Park, Char Dham",
        Cultural_Heritage: "Cultural Heritage : Garhwali and Kumaoni traditions, festivals like Kumbh Mela",
        imageUrl: "img/Uttarakhand.jpg"
    },
    "Arunachal-Pradesh": {
        name: "Arunachal Pradesh",
        Area: "83,743 km²",
        Population: "Population : ~1.4 million",
        Capital: "Capital : Itanagar", 
        Official_Language: "Official Language : English",
        Major_Cities: "Major Cities : Itanagar, Pasighat, Naharlagun",
        Rivers: "Rivers : Siang, Lohit",
        Economy: "Economy : Agriculture, tourism",
        Climate: "Climate : Varies",
        Tourism: "Tourism : Tawang Monastery, Bomdila",
        Cultural_Heritage: "Cultural Heritage : Tribal festivals, handicrafts",
        imageUrl: "img/arunachalpradesh.jpg"
    },
    "Andaman-and-Nicobar": {
        name: "Andaman and Nicobar",
        Area: "Area : 8,249 km²",
        Population: "Population : ~400,000",
        Capital: "Capital : Port Blair", 
        Official_Language: "Official Language : Hindi, English",
        Major_Cities: "Major Cities : Port Blair, Havelock Island",
        Rivers: "Rivers : None significant",
        Economy: "Economy : Tourism, fisheries, agriculture",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Cellular Jail, Havelock Island beaches",
        Cultural_Heritage: "Cultural Heritage : Tribal culture, local festivals",
        imageUrl: "img/andamannikobar.jpg"
    },
    "Dādra-and-Nagar-Haveli-and-Damān-and-Diu": {
        name: "Dadra and Nagar Haveli and Daman and Diu",
        Area: "603 km²",
        Population: "Population : ~600,000",
        Capital: "Capital : Daman", 
        Official_Language: "Official Language : Gujarati, Hindi, English",
        Major_Cities: "Major Cities : Silvassa, Daman, Diu",
        Rivers: "Rivers :Daman Ganga",
        Economy: "Economy : Tourism, textiles, agriculture",
        Climate: "Climate : Tropical",
        Tourism: "Tourism : Daman Fort, Diu beaches",
        Cultural_Heritage: "Cultural Heritage : Portuguese influence, local festivals",
        imageUrl: "img/DadraandNagarHaveliandDamanandDiu.jpg"
    },
    "Ladakh": {
        name: "Ladakh",
        Area: "59,146 km²",
        Population: "Population : ~300,000",
        Capital: "Capital : Leh", 
        Official_Language: "Official Language : Ladakhi, Hindi, English",
        Major_Cities: "Major Cities : Leh, Kargil",
        Rivers: "Rivers : Indus, Zanskar",
        Economy: "Economy : Tourism, agriculture, handloom",
        Climate: "Climate : High altitude, cold desert",
        Tourism: "Tourism : Pangong Lake, Nubra Valley",
        Cultural_Heritage: "Cultural Heritage : Tibetan Buddhist culture, festivals like",
        imageUrl: "img/ladakh.jpg"
    },
    "Uttaranchal": {
        name: "Uttarakhand",
        Area: "53,483 km²",
        Population: "Population : ~11 million",
        Capital: "Capital : Dehradun", 
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Haridwar, Nainital, Rishikesh",
        Rivers: "Rivers : Ganges, Yamuna",
        Economy: "Economy : Tourism, agriculture, hydroelectricity",
        Climate: "Climate : Varies",
        Tourism: "Tourism : Jim Corbett National Park, Char Dham",
        Cultural_Heritage: "Cultural Heritage : Garhwali and Kumaoni traditions, festivals like Kumbh Mela",
        imageUrl: "img/Uttarakhand.jpg"
    },
    "Goa": {
        name: "Goa",
        Area: "3,702 km²",
        Population: "Population : ~1.5 million",
        Capital: "Capital : Panaji", 
        Official_Language: "Official Language : Konkani",
        Major_Cities: "Major Cities : Margao, Vasco da Gama, Ponda",
        Rivers: "Rivers : Mandovi, Zuari",
        Economy: "Economy : Tourism, mining, agriculture",
        Climate: "Climate : Tropical monsoon",
        Tourism: "Tourism : Beaches, forts, spice plantations",
        Cultural_Heritage: "Cultural Heritage : Portuguese influence, festivals like Carnival",
        imageUrl: "img/goa.jpg"
    },
    "Chhattisgarh": {
        name: "Chhattisgarh",
        Area: "135,192 km²",
        Population: "Population : ~30 million",
        Capital: "Capital : Raipur", 
        Official_Language: "Official Language : Hindi",
        Major_Cities: "Major Cities : Durg, Bhilai, Bilaspur",
        Rivers: "Rivers : Mahanadi, Godavari",
        Economy: "Economy : Agriculture, mining, steel production",
        Climate: "Climate : Tropical wet and dry",
        Tourism: "Tourism : Chitrakote Falls, Bastar region",
        Cultural_Heritage: "Cultural Heritage : Tribal culture, festivals like Bastar Dussehra",
        imageUrl: "img/Chhattisgarh.jpg"
    },
    "Meghalaya": {
        name: "Meghalaya",
        Area: "22,429 km²",
        Population: "Population : ~3 million",
        Capital: "Capital : Shillong", 
        Official_Language: "Official Language : Khasi, Garo, Hindi, English",
        Major_Cities: "Major Cities : Shillong, Tura",
        Rivers: "Rivers : Brahmaputra, Umngot",
        Economy: "Economy : Agriculture, tourism, coal mining",
        Climate: "Climate : Subtropical highland",
        Tourism: "Tourism : Living root bridges, Shillong Peak",
        Cultural_Heritage: "Cultural Heritage : Tribal festivals, folk music",
        imageUrl: "img/Meghalaya.jpg"
    },
    "Assam": {
        name: "Assam",
        Area: "78,438 km²",
        Population: "Population : ~35 million",
        Capital: "Capital : Dispur", 
        Official_Language: "Official Language : Assamese",
        Major_Cities: "Major Cities : Guwahati, Silchar, Dibrugarh",
        Rivers: "Rivers : Brahmaputra, Barak",
        Economy: "Economy : Tea, oil, agriculture",
        Climate: "Climate :  Tropical monsoon",
        Tourism: "Tourism : Kaziranga National Park, Majuli Island",
        Cultural_Heritage: "Cultural Heritage : Bihu festival, traditional crafts",
        imageUrl: "img/assam.jpg"
    },
    "Manipur": {
        name: "Manipur",
        Area: "22,327 km²",
        Population: "Population : ~3 million",
        Capital: "Capital : Imphal", 
        Official_Language: "Official Language : Meitei",
        Major_Cities: "Major Cities : Imphal, Thoubal",
        Rivers: "Rivers : Irrawaddy, Chindwin",
        Economy: "Economy : Agriculture, handloom, tourism",
        Climate: "Climate : Subtropical highland",
        Tourism: "Tourism : Loktak Lake, Kangla Fort",
        Cultural_Heritage: "Cultural Heritage : Manipuri dance, festivals like Yaoshang",
        imageUrl: "img/manipur.jpg"
    }
};


// Function to show state info with image
const showStateInfo = (stateName) => {
    const infoDiv = document.getElementById('stateInfo');

    // If information is available for the hovered state
    if (stateInfo[stateName]) {
        infoDiv.innerHTML = `
            <h2>${stateInfo[stateName].name}</h2>
            <p>${stateInfo[stateName].Area}</p>
            <p>${stateInfo[stateName].Population}</p>
            <p>${stateInfo[stateName].Capital}</p>
            <p>${stateInfo[stateName].Official_Language}</p>
            <p>${stateInfo[stateName].Major_Cities}</p>
            <p>${stateInfo[stateName].Rivers}</p>
            <p>${stateInfo[stateName].Economy}</p>
            <p>${stateInfo[stateName].Climate}</p>
            <p>${stateInfo[stateName].Tourism}</p>
            <p>${stateInfo[stateName].Cultural_Heritage}</p>
            <img src="${stateInfo[stateName].imageUrl}" alt="${stateInfo[stateName].name} image" style="width: 100%; height: auto; margin-top: 10px;">
        `;
        infoDiv.classList.add('active'); // Add the active class to show with fade effect
    }
};


// Function to hide state info when not hovered
const hideStateInfo = () => {
    const infoDiv = document.getElementById('stateInfo');
    infoDiv.classList.remove('active'); // Remove the active class to fade out
};


// Assuming your SVG paths have class names like the state name
const statePaths = document.querySelectorAll('svg path');

// Add event listeners for each state path
statePaths.forEach((state) => {
    state.addEventListener('mouseover', (event) => {
        const stateName = event.target.getAttribute('id'); // Assuming id of each path is the state name
        showStateInfo(stateName);
    });

    state.addEventListener('mouseout', () => {
        hideStateInfo();
    });
});
