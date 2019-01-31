import * as React from "react";
import List from '@material-ui/core/List';
import { PropertyControls, ControlType } from "framer";
import { StoryCard } from './StoryCard';

interface IProps {
  text: string;
}

interface IState {
  isLoading: boolean;
  stories: [];
}

const DEFAULT_COVER_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89B8AAukB8/71MdcAAAAASUVORK5CYII=';

export class StoryList extends React.Component<IProps, IState> {

  static defaultProps: Partial<IProps> = {
    text: 'My Button',
  }

  static propertyControls: PropertyControls = {
    text: {
      type: ControlType.String, title: "Text",
    }
  }

  readonly state: IState = {
    isLoading: true,
    stories: [],
  }

  componentDidMount(): void {
    this.loadData();
  }

  loadData = async () => {
    try {
      const url = 'https://radish-api-develop.k8s.radishfiction.com/v5/stories/search/tag/love'
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      this.setState({ stories: resJson.stories, isLoading: false });
    } catch(e) {
      console.warn(e);
      this.setState({ isLoading: false });
    }
  }

  render(): React.ReactNode {
    const { isLoading, stories } = this.state;

    if (isLoading) {
      return null;
    }

    return (
      <List>
        {stories.map(story => {
          return (
            <StoryCard key={story.id} thumbUrl={story.cover_url} title={story.title} writer={story.user.id} />
          )
        })}
      </List>
    )
  }
}