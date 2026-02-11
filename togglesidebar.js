function toggleSidebar(){
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');

    sidebar.classList.toggle('hidden'); /*adds or removes id hidden*/
    content.classList.toggle('full'); /*moves content*/
}
