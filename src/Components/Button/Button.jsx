import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Button(props) {
  let backgroundColor = props.backgroundColor;
  let height = props.height;
  let width = props.width;
  let icon = props.icon;
  let content = props.content;
  let colorIcon = props.colorIcon;
  let fontSize = props.fontSize;
  let fontColor = props.fontColor;
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
