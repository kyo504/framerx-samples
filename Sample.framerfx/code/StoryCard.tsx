import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
    height: '60px',
    width: '200px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};

// Define type of property
interface IProps {
  story: object,
}

const DEFAULT_COVER_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89B8AAukB8/71MdcAAAAASUVORK5CYII=';

function getCoverUrl(story): string {
  if (story.cover_url) {
    return `${story.cover_url}?w=250`;
  } else {
    return DEFAULT_COVER_URL;
  }
}

export class StoryCard extends React.Component<IProps> {
  static defaultProps: Partial<IProps> = {
    story: {},
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { 
      type: ControlType.String,
      title: "Text"
    },
    // borderRadius: {
    //   type: ControlType.Number,
    //   title: 'Border Radius',
    //   min: 0,
    //   max: 32,
    //   unit: "px",
    //   step: 4
    // }
  }

  render(): React.ReactNode {
    const { story } = this.props;

    if (!!story.id) {
      return null;
    }

    return (
      <div key={story.id} style={{ display: 'flex', flexDirection: 'row', border: '1px solid #ffff00' }}>
        <img src={getCoverUrl(story)} style={{ width: '54px', height: '74px', border: '1px solid #ff00ff'}}/>
        <div style={{ flex: 1, border: '1px solid #00ffff'}}>
          <div>{story.title}</div>
          <div>{story.user.id}</div>
        </div>
      </div>
    )
  }
}
