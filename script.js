$(document).ready(function() {
    // Event delegation for "Add" buttons
    $("#dynamic-form").on("click", ".add-btn", function() {
        var target = $(this).data("target");
        var newInput = $("#" + target).clone();

        // Generate unique IDs for the cloned elements
        var newId = target + '-' + new Date().getTime();
        newInput.attr('id', newId);

        // Update name attributes to ensure uniqueness
        newInput.find("input, select, textarea").each(function() {
            var nameAttr = $(this).attr('name');
            if (nameAttr) {
                $(this).attr('name', nameAttr + '-' + newId);
            }
        });

        newInput.find(".remove-btn").show(); // Show remove button for the cloned element

        // Insert the cloned input box right below the respective section
        newInput.insertAfter($("#" + target));
    });

    // Event delegation for "Remove" buttons
    $("#dynamic-form").on("click", ".remove-btn", function() {
        $(this).parent(".input-group").remove();
    });

    // Handle form submission
    $("#dynamic-form").submit(function(event) {
        event.preventDefault();

        // Manually construct form data object
        var formData = {};
        $(this).find("input, select, textarea").each(function() {
            var name = $(this).attr("name");
            var value = $(this).val();
            if (name && value) {
                formData[name] = value;
            }
        });

        console.log("Form data:", formData);

        // Perform AJAX request or other form processing here
    });
});
