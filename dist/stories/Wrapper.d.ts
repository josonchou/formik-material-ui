import React, { ReactNode } from 'react';
import { Theme, WithStyles } from '@material-ui/core/styles';
declare const styles: (theme: Theme) => Record<"container" | "menu" | "textField", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface Props extends WithStyles<typeof styles> {
    title: string;
    children: ReactNode;
}
declare const _default: React.ComponentType<Pick<Props, "title" | "children"> & import("@material-ui/core/styles").StyledComponentProps<"container" | "menu" | "textField">>;
export default _default;