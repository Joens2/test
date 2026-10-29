            const hidden = document.getElementById("hidden");
            const hiddenbutton = document.getElementById("hiddenbutton");
            const themebutton = document.getElementById("themebutton");
            const card = document.getElementsByClassName("card");

            function updateHiddenDetails() {
                if (!hidden || !hiddenbutton) return;

                const isHidden = hiddenbutton.value === "true";
                hidden.style.opacity = isHidden ? "0" : "1";
                hiddenbutton.textContent = isHidden ? "Show Details" : "Hide Details";
            }

            if (hiddenbutton) {
                hiddenbutton.addEventListener("click", () => {
                    hiddenbutton.value = hiddenbutton.value === "true" ? "false" : "true";
                    updateHiddenDetails();
                });

                updateHiddenDetails();
            }

            function updateTheme() {
                if (!themebutton) return;

                const isDark = themebutton.value === "dark";
                document.body.style.background = isDark
                    ? "linear-gradient(135deg, #111827, #4f46e5)"
                    : "linear-gradient(135deg, #f8fafc, #c7d2fe)";
                document.body.style.color = isDark ? "white" : "black";
                themebutton.textContent = isDark ? "Light Theme" : "Dark Theme";
            }

            if (themebutton) {
                themebutton.addEventListener("click", () => {
                    themebutton.value = themebutton.value === "dark" ? "light" : "dark";
                    updateTheme();
                });

                updateTheme();
            }