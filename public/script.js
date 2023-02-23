const allTriggers = document.querySelectorAll('.id-card-trigger')

console.log(allTriggers);

allTriggers.forEach((trigger) => {
    console.log(trigger)
    trigger.addEventListener('click', () => {
        const dataId = trigger.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })

    })
})