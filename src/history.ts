import {BrowserHistory, State, Update} from 'history';
import history from 'history/browser'

let unlisten = history.listen(({ location, action }) => {
  console.log(action, location.pathname, location.state);
});

export class Router {

  private readonly history: BrowserHistory<State> = history

  start() {
    this.history.listen(this.onLocationChange.bind(this))
  }

  private onLocationChange({action, location}: Update) {
    console.log(`onLocationChange`, action, location)
  }
}
