import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Button(props) {
  let {backgroundColor , height, width, icon, content, colorIcon, fontSize, fontColor}= props;
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={icon} color={colorIcon} />
      <Text style={{fontSize: fontSize, color: fontColor}}>{content}</Text>
    </TouchableOpacity>
  );
}
