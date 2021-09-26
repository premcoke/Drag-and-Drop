import Button from './Button';
import Input from './Input';
import Paragraph from './Paragraph';



const WorkSpace = ({ list }) => {
    const getComponent = (component) => {
        var currentComp;
        switch (component) {
            case 'input':
                currentComp = <Input />;
                break;
            case 'button':
                currentComp = <Button />;
                break;
            case 'paragraph':
                currentComp = <Paragraph />;
                break;
            default:
                currentComp = <></>;
                break;

        }
        return currentComp;
    }
    return (
        <>
            {
                list.map((component) => {
                    return getComponent(component);
                })
            }
        </>
    )
};

export default WorkSpace;