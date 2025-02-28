import { Card } from "../card/card";
import Category from "../category/category";
import "./tools.css";

export default function Tools() {
  return (
    <div className="tools">
      <Category title="Frontend">
        <Card title="React.js" description="" />
        <Card title="JavaScript" description="" />
        <Card title="Vite" description="" />
        <Card title="TypeScript" description="" />
        <Card title="Tailwind CSS" description="" />
        <Card title="Mobile First" description="" />
      </Category>

      <Category title="Backend">
        <Card title="Node.js" description="" />
        <Card title=".NET" description="" />
        <Card title="C#" description="" />
        <Card title="APIs" description="" />
        <Card title="CRUD" description="" />
        <Card title="Express.js" description="" />
        <Card title="Nest.js" description="" />
        <Card title="Sequelize" description="" />
        <Card title="SQL" description="" />
      </Category>

      <Category title="Other">
        <Card title="VS Code" description="" />
        <Card title="Git" description="" />
        <Card title="Linux" description="" />
      </Category>
    </div>
  );
}
