const workers = [
    {
        name: "Darian Wiratama",
        category: "Driver",
        image: "asset/worker1.jpeg",
        about: "I'm a dependable and courteous driver with a focus on safety, comfort, and great customer service. I take pride in keeping my vehicle clean and well-maintained so every ride feels relaxed and enjoyable. Whether you're commuting, heading out with friends, or catching a flight, I'm here to get you where you need to go—on time and stress-free. Looking forward to having you in the car!"
    },
    {
        name: "Marvelle Kenzie Lim",
        category: "Water Plumber",
        image: "asset/worker4.jpeg",
        about: "I’m a professional water plumber with 10 years of experience in residential and commercial plumbing services. I specialize in water pipe installation, leak detection and repair, drainage systems, and maintenance of plumbing fixtures. Whether it’s fixing a leaking tap, unclogging drains, or setting up a complete piping system, I bring skill, precision, and a problem-solving mindset to every project. Let’s keep your water flowing right—stress-free and hassle-free."
    },
    {
        name: "Nicholas Sebastian",
        category: "AC Technician",
        image: "asset/worker.jpeg",
        about: "I'm a certified AC technician with over 8 years of experience in installation, maintenance, and repair of air conditioning systems. I specialize in both residential and commercial units, ensuring optimal performance and energy efficiency. Whether you need a new AC installed, routine maintenance, or urgent repairs, I'm here to help. My goal is to keep  your indoor environment comfortable and your AC running smoothly all year around."
    },
    {
        name: "Allexandra Fellisa",
        category: "Tailor",
        image: "asset/worker2.jpeg",
        about: "I'm a skilled tailor with a passion for creating custom clothing that fits perfectly and reflects your personal style. With over 5 year of experience in tailoring, I specialize in alterations, bespok garments, and unique designs. Whether you need a dress altered, a suit tailored, or a one-of-a-kind piece made just for you, I bring attention to detail and commitment to quality in every stitch. Let's bring your fashion vision to life together!"
    },
    {
        name: "Adriel Agustinus Jie",
        category: "Electrician",
        image: "asset/worker3.jpeg",
        about: "I'm a licensed electrician with over 7 years of experience in residential and commercial electrical work. I specialize in wiring, lighting installation, circuit repairs, and electrical system upgrades. Safety and efficiency are my top priorities, and I take pride in delivering high-quality workmanship on every project. Whether you need new outlets installed, lighting fixtures replaced, or a complete electrical system overhaul, I'm here to ensure your electrical needs are met with professionalism and expertise."
    },
    {
        name: "Dimas Dwi Jayanto",
        category: "Babysitter",
        image: "https://media.licdn.com/dms/image/v2/C5603AQEaIIEzi6e-AA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636973228565?e=2147483647&v=beta&t=Sa88OWu0GG5gCvarsCsIbzolQ8P6ivo-kvSCfmk7JV8",
        about: "I'm a caring and responsible babysitter with over 6 years of experience in providing safe and engaging care for children of all ages. I focus on creating a nurturing environment where kids can learn, play, and grow. From organizing fun activities to ensuring bedtim routines are followed, I'm dedecated to the well-being and happiness of the children I care for. Whether you need occasional babysitting or regular childcare, I'm here to support your family's needs with love and attention."
    },
    {
        name: "Dontol Beban Adit",
        category: "Gardener",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvjudKSz5Ez14MVd1LWVX7PuDG_9Hp9R2gQ&s",
        about: "I'm a passionate garderner with a love for creating beautiful and sustainable outdoor spaces. With over 5 years of experience in landscape design, planting, and maintenance, I specialize in transforming gardens into lush, vibrant havens. Whether you need help with planting flowers, maintaining your lawn, or designing a complete garden makeover, I'm here to bring your outdoor vision to life. Let's cultivate a garden that reflects your style and enhances your home's beauty."
    },
    {
        name: "Nicholas Saputra",
        category: "Private Chef",
        image: "https://m.media-amazon.com/images/M/MV5BMjA2NTkxNTY1Ml5BMl5BanBnXkFtZTcwOTI1MDE3Nw@@._V1_FMjpg_UX1000_.jpg",
        about: "I'm a professional private chef with a passion for creating delicious and memorable dining experiences. With over 10 years of culinary expertise, I specialize in crafting personalized menus that cater to your tastes and dietary preferences. Whether you're hosting an intimate dinner party, a special celebration, or simply want to enjoy goumet meals at home, I'm here to provide exceptional service and exquisite cuisine. Let's elevate your dining experience with a touch of culinary artistry."
    },
    {
        name: "Jennie Blackpink",
        category: "Babysitter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YOesi3q6kJK35wifiAVRvOowlK-a1z2DVw&s",
        about: "I'm a caring and responsible babysitter with over 6 years of experience in providing safe and engaging care for children of all ages. I focus on creating a nurturing environment where kids can learn, play, and grow. From organizing fun activities to ensuring bedtim routines are followed, I'm dedecated to the well-being and happiness of the children I care for. Whether you need occasional babysitting or regular childcare, I'm here to support your family's needs with love and attention."
    }
]

function gotoWorkerDetail(name, category, image, about) {
    const workerData = {
        name: name,
        category: category,
        image: image,
        about: about
    }
    const queryParams = new URLSearchParams(workerData).toString();
    window.location.href = `profile.html?${queryParams}`;
}

const product_wrapper = document.getElementById("recommendation-product-wrapper")

function renderWorkers(wrapper, limit) {
    wrapper.innerHTML = "";
    const count = limit ? Math.min(limit, workers.length) : workers.length;
    for (let i = 0; i < count; i++) {
        wrapper.innerHTML += `<div class="product-card-wrapper">
            <div class="product-img-wrapper">
                <img src="${workers[i].image}" alt="${workers[i].name}">
            </div>
            <div class="product-desc-wrapper">
                <h2>${workers[i].name}</h2>
                <p>${workers[i].category}</p>
            </div>
            <button type="button" class="buy-button" onclick="gotoWorkerDetail('${workers[i].name}', '${workers[i].category}', '${workers[i].image}', \`${workers[i].about}\`)">Book Here</button>
        </div>`;
    }
}
