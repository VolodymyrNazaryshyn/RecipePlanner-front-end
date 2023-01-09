import React, { useState } from 'react';
import Modal from '../modal/Modal';

const RecipeCard = ({ recipe }) => {
    const { name, kindOfMeal, image, description } = recipe;
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className='recipe-card' onClick={() => setModalActive(true)}>
                <img src={image} alt={name} />
                <div className='card-body'>
                    <span className='category'>{kindOfMeal}</span>
                    <h3>{name}</h3>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal-window'>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Modal>
        </>
    )
};

export default RecipeCard;