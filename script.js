function updateChecklist() {
    let isForestWithRespondent = document.getElementById("forestWithRespondent").checked;
    let isForestProductOnly = document.getElementById("forestProductOnly").checked;
    let isForestWithConveyance = document.getElementById("forestWithConveyance").checked;

    let essentials = document.querySelectorAll(".essential");
    let respondents = document.querySelectorAll(".respondent");
    let conveyance = document.querySelectorAll(".conveyance");
    let optionals = document.querySelectorAll(".optional");

    if (isForestWithRespondent) {
        essentials.forEach(item => item.classList.remove("hidden"));
        respondents.forEach(item => item.classList.remove("hidden"));
        conveyance.forEach(item => item.classList.add("hidden"));
    } else if (isForestProductOnly) {
        essentials.forEach(item => item.classList.remove("hidden"));
        optionals.forEach(item => item.classList.add("hidden"));
    } else if (isForestWithConveyance) {
        essentials.forEach(item => item.classList.add("hidden"));
        respondents.forEach(item => item.classList.add("hidden"));
        conveyance.forEach(item => item.classList.add("hidden"));
        optionals.forEach(item => item.classList.add("hidden"));

        document.querySelectorAll(".essential").forEach(item => {
            if (
                item.textContent.includes("Duly Accomplished Receipt") ||
                item.textContent.includes("Tally Sheet") ||
                item.textContent.includes("Geo-tagged Photos of Apprehension") ||
                item.textContent.includes("GIS Map of the Place of Apprehension") ||
                item.textContent.includes("Seizure Order and Seizure Receipt") ||
                item.textContent.includes("Notice of Hearing")
            ) {
                item.classList.remove("hidden");
            }
        });

        document.querySelectorAll(".conveyance").forEach(item => item.classList.remove("hidden"));

        document.querySelectorAll(".optional").forEach(item => {
            if (
                item.textContent.includes("Proof of Notice") ||
                item.textContent.includes("Affidavit/Sworn Statements (If Applicable)") ||
                item.textContent.includes("Minutes of Administrative Confiscation Proceedings (ACP)") ||
                item.textContent.includes("Recommended of Hearing Officer") ||
                item.textContent.includes("Endorsement of PENRO") ||
                item.textContent.includes("Draft Order")
            ) {
                item.classList.remove("hidden");
            }
        });
    } else {
        essentials.forEach(item => item.classList.remove("hidden"));
        optionals.forEach(item => item.classList.remove("hidden"));
    }
}

document.querySelectorAll("input[name='forestOption']").forEach(radio => {
    radio.addEventListener("change", updateChecklist);
});
