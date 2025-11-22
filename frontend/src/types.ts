export interface Component {
    name: string;
    quantity: number;
    priceInINR: number;
}

export interface Wire {
    start: [number, number, number];
    end: [number, number, number];
    color: string;
}

export interface Component3D {
    type: string;
    position: [number, number, number];
    color: string;
    size?: [number, number, number];
    label?: string;
}

export interface Layout3D {
    components: Component3D[];
    wires: Wire[];
}

export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    theory?: string;
    components?: Component[];
    steps?: string[];
    layout3d?: Layout3D;
}
