import React, { useEffect } from 'react'
import AllImages from './AllImages'
import { BL } from '../Hooks'
import { WrapView, WrapViewContent } from './Style'
import IconButtonElement from '../Elements/IconButtonElement'
import ButtonElement from '../Elements/ButtonElement'

const View = (props) => {

    const {
        buttonsStruct
    } = BL()

    return (
        <>
            <WrapView>
                <IconButtonElement {...buttonsStruct['prev']} />
                <WrapViewContent>
                    <AllImages />
                    <div className='wrap-select-category-btn'>
                        <ButtonElement
                            {...buttonsStruct['selectCategory']}
                        />
                    </div>
                </WrapViewContent>
                <IconButtonElement {...buttonsStruct['next']} />

            </WrapView>
        </>
    )
}

export default View