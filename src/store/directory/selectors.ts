import { createSelector } from "reselect";
import { ApplicationState } from "..";

const selectDirectoryMenu = (state: ApplicationState) => state.directoryMenu;

export const selectDirectoryMenuSections = createSelector(
	[selectDirectoryMenu],
	directoryMenu => directoryMenu.sections,
);

export interface IDirectoryMenuSelector {
	sections?: ReturnType<typeof selectDirectoryMenuSections>;
}
