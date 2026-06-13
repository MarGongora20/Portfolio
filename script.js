let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            let cards = document.querySelectorAll(".card")
            
            cards.forEach(function(card, indice) {
                
                setTimeout(function() {
                    card.classList.add("visible")
                }, indice * 150)
            })
        }
    })
})


observer.observe(document.getElementById("skills"))