import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Start from './screens/Start';
import Question from './screens/Question'

export default function App() {
  const [userPage, setUserPage] = useState(0);
  const [userTotal, setUserTotal] = useState("");

  let content;

  const handleSubmitTotal = userInput => {
    setUserTotal(parseFloat(userInput))
    setUserPage((userPage) => userPage + 1)
  }

  const handlePreviousPage = () => {
    setUserPage((userPage) => userPage - 1)
  }

  if (userPage === 0) {
    content = <Start submitTotal={handleSubmitTotal} />
  }
  else if (userPage === 1) {
    content = <Question prevPage={handlePreviousPage} userTotal={userTotal} />
  }

  return (
    <View style={styles.screen}>
      <Header title={"Tipper"}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
