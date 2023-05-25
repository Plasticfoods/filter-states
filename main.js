const search = document.getElementById('search');
const displayList = document.getElementById('output');

search.addEventListener('input', () => searchStates(search.value));

async function searchStates(input) {
    let response = await fetch('data/states.json');
    const states = await response.json();

    let matches = states.filter((state) => {
        if(state.abbr == input.toUpperCase()) {
            return true;
        }
        if(state.name.toUpperCase().startsWith(input.toUpperCase())) {
            return true;
        }
    });
    
    if(input.length === 0) {
        matches = [];
    }
    displaySates(matches);
}

function displaySates(matches) {
    let output = '';
    matches.forEach((match) => {
        output += `
            <div class="bg-primary p-2 m-2">
                <h4>
                    ${match.name}
                    (${match.abbr})
                    <span class="text-info">${match.capital}</span>
                </h4>
                ${match.lat}/${match.long}
            </div>
        `;        
    });


    displayList.innerHTML = output;
}