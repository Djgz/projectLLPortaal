document.addEventListener("DOMContentLoaded", function () {
    var submit1 = document.getElementById("submit1");

    function submitAnimation(button) {
        button.style.transform = "scale(0)";
        button.style.color = "#2dce53";
        button.style.padding = "0";

        setTimeout(function () {
            button.value = "";
            button.style.border = "5px solid #2dce53";
            button.style.background = "#fff";
        }, 400);

        setTimeout(function () {
            button.style.transform = "scale(1)";
        }, 800);

        setTimeout(function () {
            button.value = "✓";
        }, 1500);
    }

    function formChecker() {
        let inputs = document.getElementsByTagName("input");
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== "submit" && inputs[i].type !== "checkbox" && inputs[i].value.trim() === "") { 
                alert("Er zijn velden niet ingevuld");
                return false;
            }
        }

        if (checkboxes.length > 0 && !isCheckboxChecked) {
            alert("Accepteer de voorwaarden alstublieft :)");
            return false;
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        let isValid = await formChecker();

        if (isValid) {
            submitAnimation(submit1);

            setTimeout(() => {
                event.target.submit();
            }, 1800);
        }
    }

    document.querySelector("form").addEventListener("submit", handleSubmit);
});