import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

export function Row({children, gap}: Readonly<{children: ReactNode, gap?: number}>) {
  return <View style={[styles.containerRow , {gap: gap}]}>{children}</View>;
}
export function Col({children, gap}: Readonly<{children: ReactNode, gap?: number}>){
    return(
        <View style={[styles.containerCol, {gap: gap}]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    containerRow : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerCol: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
});
