import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#454545',
  },
  task: {
    fontSize: 18,
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 5,
  },
  control: {
    fontSize: 18,
    color: '#5E60CE',
    fontWeight: 'bold',
  },
  title: {
    backgroundColor: '#0D0D0D',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 70,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -30,
    marginBottom: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    height: 56,
    width: 271,
    borderRadius: 5,
    backgroundColor: '#262626',
    color: '#FFF',
    padding: 14,
    marginRight: 5,
    fontSize: 16,
  },
  inputFocus:{
    height: 56,
    width: 271,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5E60CE',
    backgroundColor: '#262626',
    color: '#FFF',
    padding: 14,
    marginRight: 5,
    fontSize: 16,
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
});
