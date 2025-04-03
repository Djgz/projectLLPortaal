document.addEventListener("DOMContentLoaded", function () {
    var submit1 = document.getElementById("submit1");

    function submitAnimation(button) {
        button.style.transform = "scale(0)";
        button.style.color = "#2dce53";

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
        let inputs = document.querySelectorAll("input:not([type='submit']):not([type='checkbox'])");
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let isValid = true;
    
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                isValid = false;
            } else {
                input.style.border = "2px solid #ccc";
            }
        });
    
        if (checkboxes.length === 1) {
            if (!checkboxes[0].checked) {
                alert("Accepteer alstublieft de voorwaarden.");
                isValid = false;
            }
        } else if (checkboxes.length > 1) {
            let isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            if (!isCheckboxChecked) {
                alert("Selecteer alstublieft hoeveel uren u wilt volgen.");
                isValid = false;
            }
        }
    
        if (!isValid) return false;
    
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