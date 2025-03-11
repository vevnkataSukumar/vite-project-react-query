import { forwardRef, useImperativeHandle, useRef } from 'react'

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = "";
        },
    }));
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." />
        </div>
    )
});

export default CustomInput