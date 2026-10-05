document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Search functionality
  const searchInput = document.querySelector("#site-search");
  const searchResults = document.querySelector("#search-results");

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
        return;
      }

      const items = [
        {
          title: "S1 Notes",
          description: "First semester KTU notes and study materials",
          link: "pages/notes.html"
        },
        {
          title: "S2 Notes",
          description: "Second semester KTU notes and study materials",
          link: "pages/notes.html"
        },
        {
          title: "Previous Year Questions",
          description: "KTU previous year question papers",
          link: "pages/pyq.html"
        },
        {
          title: "Syllabus",
          description: "KTU semester-wise syllabus",
          link: "pages/syllabus.html"
        },
        {
          title: "Semester Resources",
          description: "S1 to S8 study resources",
          link: "pages/semester.html"
        },
        {
          title: "Request Materials",
          description: "Request notes, PYQs or other study materials",
          link: "pages/request.html"
        }
      ];

      const results = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );

      if (results.length === 0) {
        searchResults.innerHTML = `
          <div class="search-no-result">
            No results found for "<strong>${query}</strong>"
          </div>
        `;
      } else {
        searchResults.innerHTML = results
          .map(
            (item) => `
              <a href="${item.link}" class="search-result">
                <strong>${item.title}</strong>
                <span>${item.description}</span>
              </a>
            `
          )
          .join("");
      }

      searchResults.style.display = "block";
    });
  }

  // Current year
  const yearElements = document.querySelectorAll(".current-year");
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // Close search results when clicking outside
  document.addEventListener("click", (event) => {
    if (
      searchResults &&
      searchInput &&
      !searchInput.contains(event.target) &&
      !searchResults.contains(event.target)
    ) {
      searchResults.style.display = "none";
    }
  });

  // Request form
  const requestForm = document.querySelector("#request-form");

  if (requestForm) {
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = requestForm.querySelector('[name="name"]')?.value || "";
      const request = requestForm.querySelector('[name="request"]')?.value || "";

      if (!name || !request) {
        alert("Please fill in the required fields.");
        return;
      }

      alert(
        "Thank you! Your request has been recorded. We will try to provide the requested material."
      );

      requestForm.reset();
    });
  }
});
