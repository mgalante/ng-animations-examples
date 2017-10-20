/* 

// config
export interface TableModConfig {
	addItemActive: boolean;
	rowViewActions?: RowAction[];
	rowEditActions?: RowAction[];
	circleButtons?: CircleButton[];
}
export enum TableModMode {
	view = "view",
	editable = "editable",
	form = "form"
}
export interface CircleButton {
	icon: string;
	text: string;
	action: string;
}

export enum RowActionType {
	button = "button",
	icon = "icon",
	contextMenu = "contextMenu"
}
export interface CmItem {
	title: string;
	action: string;
}

export interface RowAction {
	type: RowActionType | string,
	tooltip?: string;
	action?: string;
	title?: string;
	icon?: string;
	cmItems?: CmItem[]
}


//// HEAD
export interface TableModHead {
    title: string;
    attribute: Attribute;
    sortBtnDisplay: boolean;
    dataType: number;
}
export interface Attribute {
    value: string;
	config?: any;
	items?: string;
	currency?: string;
}

//// BODY
export interface TableModBody {
    disable: boolean;
    checked: boolean;
    rowFeedback: RowFeedback;
    state: TableModMode;
	rowData: any;
}

export enum RowFeedback {
	success = "success",
	warning = "warning",
	info = "info",
	danger = "danger"
} */