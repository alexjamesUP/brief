document.getElementById('brief-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const jobName = document.getElementById('job-name').value;
    const projectName = document.getElementById('project-name').value;
    const description = document.getElementById('description').value;
    const briefTo = document.getElementById('brief-to').value;
    const example1 = document.getElementById('example1') ? document.getElementById('example1').value : '';
    const example2 = document.getElementById('example2') ? document.getElementById('example2').value : '';
    const example3 = document.getElementById('example3') ? document.getElementById('example3').value : '';

    const output = `Job Name: ${jobName}\nProject Name: ${projectName}\nDescription: ${description}\nBrief to: ${briefTo}\nExample 1: ${example1}\nExample 2: ${example2}\nExample 3: ${example3}`;
    document.getElementById('output').innerText = output;
    document.getElementById('copy-button').style.display = 'block';
});

document.getElementById('brief-to').addEventListener('change', function () {
    const extraFields = document.getElementById('extra-fields');
    extraFields.innerHTML = '';

    const selectedTeam = document.getElementById('brief-to').value;

    if (selectedTeam === 'video') {
        extraFields.innerHTML = `
            <label for="example1">Example 1 (Video):</label>
            <input type="text" id="example1" name="example1" required><br>
            <label for="example2">Example 2 (Video):</label>
            <input type="text" id="example2" name="example2" required><br>
            <label for="example3">Example 3 (Video):</label>
            <input type="text" id="example3" name="example3" required><br>
        `;
    } else if (selectedTeam === 'creative') {
        extraFields.innerHTML = `
            <label for="example1">Example 1 (Creative):</label>
            <input type="text" id="example1" name="example1" required><br>
            <label for="example2">Example 2 (Creative):</label>
            <input type="text" id="example2" name="example2" required><br>
            <label for="example3">Example 3 (Creative):</label>
            <input type="text" id="example3" name="example3" required><br>
        `;
    } else if (selectedTeam === 'copy') {
        extraFields.innerHTML = `
            <label for="example1">Example 1 (Copy):</label>
            <input type="text" id="example1" name="example1" required><br>
            <label for="example2">Example 2 (Copy):</label>
            <input type="text" id="example2" name="example2" required><br>
            <label for="example3">Example 3 (Copy):</label>
            <input type="text" id="example3" name="example3" required><br>
        `;
    }
});

document.getElementById('copy-button').addEventListener('click', function () {
    const outputElement = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Copied to clipboard');
});
