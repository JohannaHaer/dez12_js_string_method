function check() {
    let input = document.querySelector("#bundeslandInfo").value
    let eingabe = document.querySelector("#bundeslandInfoErgebnis")
    
    switch (input) {
        case "Baden-Württemberg":
            eingabe.textContent = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
        break;
        case "Bayern":
            eingabe.textContent = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
        break;
        case "Berlin":
            eingabe.textContent = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
        break;
        case "Brandenburg":
            eingabe.textContent = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
        break;
        case "Bremen":
            eingabe.textContent = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
        break;
        case "Hamburg":
            eingabe.textContent = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
        break;
        case "Hessen":
            eingabe.textContent = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
        break;
        case "Mecklenburg-Vorpommern":
            eingabe.textContent = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
        break;
        case "Niedersachsen":
            eingabe.textContent = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
        break;
        case "Nordrhein-Westfalen":
        case "NRW":
            eingabe.textContent = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
        break;
        case "Rheinland-Pfalz":
            eingabe.textContent = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
        break;
        case "Saarland":
            eingabe.textContent = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
        break;
        case "Sachsen":
            eingabe.textContent = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
        break;
        case "Sachsen-Anhalt":
            eingabe.textContent = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
        break;
        case "Schleswig-Holstein":
            eingabe.textContent = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
        break;
        case "Thürigen":
            eingabe.textContent = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
        break;
        default: 
            eingabe.textContent = "Ein solches Bundesland gibt es in Deutschland nicht."
    }

    
}









