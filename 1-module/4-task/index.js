function checkSpam(str) {
  const loverCaseString = str.toLowerCase();
  if (loverCaseString.includes('xxx') || loverCaseString.includes('1xbet')) {
    return true;
  } else {
    return false;
  }
}
