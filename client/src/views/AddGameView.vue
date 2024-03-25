<script setup>
    import "../assets/footer.css";
    import "../assets/header.css";
    import "../assets/addGame.css";
    import navbar from "../components/navbarView.vue";
    import bottomNavbar from "../components/bottomNavbarView.vue";
</script>
<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'>
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">
    </head>
    <header class ="header-section">
        <navbar></navbar>
    </header>
    <body>
        <div class="ag-body-container">
            <div class="ag-basic-grid">
                <div class="ag-title-section">
                    <form>
                        <input id="ag-title" type="text" placeholder="enter title here...">
                    </form>
                </div>
                <div class="ag-preview-section">
                    <img id="ag-preview-image" src="../components/icons/mario.jpg">
                    <div class="preview-text"><strong>PREVIEW</strong></div>
                </div>
                <div class="ag-button-section">
                    <button id="ag-upload-button">Upload Media</button>
                </div>
                <div class="ag-description-section">
                    <form>
                        <textarea id="ag-description" placeholder="Description"></textarea>
                    </form>
                </div>
            </div>
            <div class="ag-advanced-flex">
                <div>
                    <form class="ag-advanced-form">
                        <input id="ag-link" type="text" placeholder="enter link here...">
                        <input id="ag-price" type="text" placeholder="price"><br>
                        <input id="ag-tags" type="text" placeholder="add tags...">
                    </form>
                </div>
                <div>
                    <button id="ag-publish-button"><strong>PUBLISH</strong></button>
                </div>
            </div>
        </div>
    </body>
    <footer class="footer-section">
        <bottomNavbar></bottomNavbar>
    </footer>
</template>