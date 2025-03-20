function updateChecklist() {
    let isForestProductOnly = document.getElementById("forestProductOnly").checked;
    let isForestWithRespondent = document.getElementById("forestWithRespondent").checked;
    let isForestWithConveyance = document.getElementById("forestWithConveyance").checked;

    let allItems = document.querySelectorAll(".checklist label, .nested-list li");

    // Hide all items initially
    allItems.forEach(item => {
        item.classList.add("hidden");
        if (item.previousSibling && item.previousSibling.nodeType === 3) {
            item.previousSibling.remove(); // Remove empty text nodes that cause extra space
        }
    });

    let showItems = [
        "Duly Accomplished Apprehension Receipt",
        "Forest Product Tally Sheet",
        "Geo-tagged Photos of Apprehension",
        "GIS Map of the Place of Apprehension",
        "Custody Receipt",
        "Seizure Receipt",
        "Seizure Order",
        "Notice of Hearing",
        "Proof of Notice",
        "Affidavit/Sworn Statements in lieu of direct testimony",
        "Minutes of Administrative Confiscation Proceedings (ACP)",
        "CSW Report",
        "Endorsement of PENRO",
        "Draft Order"
    ];

    if (isForestProductOnly) {
        showItems.push("Posting in 3 Conspicuous Places","Certificate of posting & Photos of Posting");
    } else if (isForestWithRespondent) {
        showItems.push("Owner of Lumber", "Apprehending Officer","Other Interested Party","Registry Receipt; or proof of receipt of the Parties");
    } else if (isForestWithConveyance) {
        showItems.push("Original Copy of OR/CR or Certification of Non-surrender of OR/CR","Owner of Lumber", "Apprehending Officer", "Other Interested Party", "Owner of Conveyance/Chainsaw", "Registry Receipt; or proof of receipt of the Parties");
    }

    allItems.forEach(item => {
        if (showItems.includes(item.textContent.trim())) {
            item.classList.remove("hidden");
        }
    });
}

// Attach event listener to radio buttons
document.querySelectorAll("input[name='forestOption']").forEach(radio => {
    radio.addEventListener("change", updateChecklist);
});
