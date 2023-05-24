import React, { useEffect } from 'react'
import AllImages from './AllImages'
import { BL } from 'components/Hooks'
import { WrapView, WrapViewContent } from './Style'
import IconButtonElement from 'components/Elements/IconButtonElement'
import ButtonElement from 'components/Elements/ButtonElement'

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