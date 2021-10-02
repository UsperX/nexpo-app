import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from './Themed';

import { Company } from '../api/companies';

type CompanyListItemProps = {
  company: Company;
  onPress: () => void;
}

export const CompanyListItem = ({ company, onPress }: CompanyListItemProps) => 
  <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.companyName}>{company.name}</Text>
  </Pressable>

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: '#333333',
    borderBottomWidth: 0.5,
  },
  companyName: {
    fontSize: 18,
  }
})
