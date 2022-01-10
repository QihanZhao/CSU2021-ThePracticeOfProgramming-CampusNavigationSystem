function convertJSONtoG6(graphFromJson: any,selected:string[]) {
    console.log(graphFromJson);
    let nodesKey = Object.keys(graphFromJson["nodes"]);
    let nodesEle = new Array();
    for (let i = 0; i < nodesKey.length; i++){
        const res: { id: string, style: any, label: string } = { id: nodesKey[i], style: undefined, label: "" };
        if (selected.find(val => val === nodesKey[i])) {
            res.style = {
                fill:'red'
            }
        }
        res.label = graphFromJson["nodes"][nodesKey[i]].name;
        nodesEle[i] = res;
    }

    let edgesEle = new Array();
    for (let i = 0; i < graphFromJson["edges"].length; i++) {
        edgesEle[i] = {
            source: graphFromJson["edges"][i]["source"],
            target: graphFromJson["edges"][i]["target"],
            weight: graphFromJson["edges"][i]["weight"],
            style: undefined
        };
    }
    return {
        nodes: nodesEle,
        edges: edgesEle,
    }
}
export { convertJSONtoG6 }