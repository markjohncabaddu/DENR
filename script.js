function updateChecklist() {
    let isForestWithRespondent = document.getElementById("forestWithRespondent").checked;
    let isForestProductOnly = document.getElementById("forestProductOnly").checked;
    let isForestWithConveyance = document.getElementById("forestWithConveyance").checked;

    let essentials = document.querySelectorAll(".essential");
    let respondents = document.querySelectorAll(".respondent");
    let conveyance = document.querySelectorAll(".conveyance");
    let optionals = document.querySelectorAll(".optional");

    essentials.forEach(item => item.classList.remove("hidden"));
    optionals.forEach(item => item.classList.add("hidden"));

    if (isForestWithRespondent) {
        respondents.forEach(item => item.classList.remove("hidden"));
    } else if (isForestWithConveyance) {
        conveyance.forEach(item => item.classList.remove("hidden"));
    }
}

document.querySelectorAll("input[name='forestOption']").forEach(radio => {
    radio.addEventListener("change", updateChecklist);
});
