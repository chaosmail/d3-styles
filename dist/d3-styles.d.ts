declare module D3 {

    interface Selection {

        lineStyle(lineStyle:Style.Line):Selection;
        lineStyle(callFn:(d:any,i:number)=>Style.Line):Selection;

        areaStyle(areaStyle:Style.Area):Selection;
        areaStyle(callFn:(d:any,i:number)=>Style.Area):Selection;

        fontStyle(fontStyle:Style.Font):Selection;
        fontStyle(callFn:(d:any,i:number)=>Style.Font):Selection;
    }

    interface Style {

        Line: {
            stroke:string;
            strokeWidth:number;
            strokeOpacity:number;
            strokeLinecap:string;
            strokeDasharray:string;
        }

        Area: {
            stroke:string;
            strokeWidth:number;
            strokeOpacity:number;
            strokeLinecap:string;
            strokeDasharray:string;

            fill:string;
            fillOpacity:number;
        }

        Font: {
            stroke:string;
            strokeWidth:number;
            strokeOpacity:number;
            strokeLinecap:string;
            strokeDasharray:string;

            fill:string;
            fillOpacity:number;

            fontFamily:string;
            fontSize:number;
            fontWeight:string;
        }
    }
}