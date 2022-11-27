import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterScreenUI } from './FilterScreenUI';
import { setSearchFilters } from "../../../redux/slices/userReducer";

export default function FilterScreen({navigation , props}) {

  const formik = useFormik({
    initialValues : {
      distance : 0,
      priceRange : '',
      rating : 0,
      restaurantTypes : [],
    }
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchFilters(formik.values));
  }, [formik.values])

  const onDistanceChange = (value) => {
    formik.setFieldValue('distance', value);
  }

  const onRestaurantTypeChange = (value) => {
    formik.setFieldValue('restaurantTypes', value);
  }

  const onPriceRangeChange = (value) => {
    formik.setFieldValue('priceRange', value);
  }

  const onRatingChange = (value) => {
    formik.setFieldValue('rating', value);
  }

  return (
    <FilterScreenUI
      distance={formik.values.distance}
      rating = {formik.values.rating}
      restaurantTypes = {formik.values.restaurantTypes}
      priceRange = {formik.values.priceRange}

      onDistanceChangeHandler={onDistanceChange}
      onRestaurantTypeChangeHandler={onRestaurantTypeChange}
      onPriceRangeChangeHandler={onPriceRangeChange}
      onRatingChangeHandler={onRatingChange}

    ></FilterScreenUI>
  )
}

