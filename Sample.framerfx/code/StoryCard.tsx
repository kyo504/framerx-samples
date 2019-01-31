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
  height: number;
  title: string;
  writer: string;
  thumbUrl: string;
}

const DEFAULT_COVER_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89B8AAukB8/71MdcAAAAASUVORK5CYII=';

function getCoverUrl(thumbUrl): string {
  console.log(thumbUrl);
  if (thumbUrl) {
    return `${thumbUrl}?w=250`;
  } else {
    return DEFAULT_COVER_URL;
  }
}

export class StoryCard extends React.Component<IProps> {
  static defaultProps: Partial<IProps> = {
    height: 74,
    title: 'Title',
    writer: 'Rob Thier',
    // thumbUrl: 'https://picsum.photos/200/300/?random'
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { 
      type: ControlType.String,
      title: "Text"
    },
    writer: {
      type: ControlType.String,
      title: 'Writer Name'
    },
    thumbUrl: {
      type: ControlType.String,
      title: 'Thumbnail Url',
    }
  }

  render(): React.ReactNode {
    const { title, writer, thumbUrl, height } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', height, border: '1px solid #ffff00' }}>
        <img src={getCoverUrl(thumbUrl)} style={{ width: '54px', height, border: '1px solid #ff00ff'}}/>
        <div style={{ flex: 1, border: '1px solid #00ffff'}}>
          <div>{title}</div>
          <div>{writer}</div>
        </div>
      </div>
    )
  }
}
