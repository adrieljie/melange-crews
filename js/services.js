const search_input = document.getElementById("search-input");
const select_option = document.getElementById("select-option");

const recommendation_product_wrapper = document.getElementById("recommendation-product-wrapper");

select_option.addEventListener("change", function() {
    recommendation_product_wrapper.innerHTML = "";

    if (select_option.value == "all") {
        for (let i = 0; i < workers.length; i++) {
            product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                            <div class="product-img-wrapper">
                                                <img src="${workers[i].image}" alt="${workers[i].name}">
                                            </div>
                                            <div class="product-desc-wrapper">
                                                <h2>${workers[i].name}</h2>
                                                <p>${workers[i].category}</p>
                                            </div>
                                            <button type="button" class="buy-button" onclick="gotoWorkerDetail('${workers[i].name}', '${workers[i].category}', '${workers[i].image}')">Book Here</button>
                                        </div>`
        }
        return;
    }

    for (let i = 0; i < workers.length; i++) {
        if (workers[i].category == select_option.value) {
            product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                            <div class="product-img-wrapper">
                                                <img src="${workers[i].image}" alt="${workers[i].name}">
                                            </div>
                                            <div class="product-desc-wrapper">
                                                <h2>${workers[i].name}</h2>
                                                <p>${workers[i].category}</p>
                                            </div>
                                            <button type="button" class="buy-button" onclick="gotoWorkerDetail('${workers[i].name}', '${workers[i].category}', '${workers[i].image}')">Book Here</button>
                                        </div>`
        }
    }
})

search_input.addEventListener("input", function() {
    recommendation_product_wrapper.innerHTML = "";

    for (let i = 0; i < workers.length; i++) {
        data = workers[i].name.toLowerCase();
        input = search_input.value.toLowerCase();

        if (data.match(input)) {
            product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                            <div class="product-img-wrapper">
                                                <img src="${workers[i].image}" alt="${workers[i].name}">
                                            </div>
                                            <div class="product-desc-wrapper">
                                                <h2>${workers[i].name}</h2>
                                                <p>${workers[i].category}</p>
                                            </div>
                                            <button type="button" class="buy-button" onclick="gotoWorkerDetail('${workers[i].name}', '${workers[i].category}', '${workers[i].image}')">Book Here</button>
                                        </div>`
        }
    }
})