declare module D3 {

    interface Selection {

        lineStyle(lineStyle:any):Selection;
        lineStyle(callFn:(d:any,i:number)=>any):Selection;

        areaStyle(areaStyle:any):Selection;
        areaStyle(callFn:(d:any,i:number)=>any):Selection;

        fontStyle(fontStyle:any):Selection;
        fontStyle(callFn:(d:any,i:number)=>any):Selection;
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
