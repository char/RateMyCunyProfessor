const renderContent = (content, type) => {
    if (type == 'rating') {
        const rate = document.createElement('a');
        rate.className=""
        rate.innerHTML = `

        `
    }
    const li = document.createElement('li')
    li.className = "ratings";
    li.innerHTML = `
        <li> </li>
    `
    return li
}

export default renderContent;