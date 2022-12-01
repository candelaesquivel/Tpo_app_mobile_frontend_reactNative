import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterScreenUI } from './FilterScreenUI';
import { setSearchFilters } from "../../../redux/slices/userReducer";

export default function FilterScreen({navigation , props}) {


  const formik = useFormik({
    initialValues : {
      ...useSelector(state => state.user.filters)
    }
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchFilters(formik.values));
  }, [formik.values])

  const onDistanceChange = (value) => {
    formik.setFieldValue('maxDistance', value);
  }

  const onRestaurantTypeChange = (value) => {
    formik.setFieldValue('restaurantTypes', value);
  }

  const onPriceRangeChange = (value) => {
    formik.setFieldValue('priceRange', value);
  }

  const onRatingChange = (value) => {

    const currValue = formik.values.minRating;

    if (currValue === value)
      value = 0;

    formik.setFieldValue('minRating', value);
  }

  const onCleanFiltersPress = (event) => {
    formik.setValues({
      maxDistance : 0,
      minRating : 0,
      restaurantTypes : [],
      priceRange : '',
    });
  }

  return (
    <FilterScreenUI
      distance={formik.values.maxDistance}
      rating = {formik.values.minRating}
      restaurantTypes = {formik.values.restaurantTypes}
      priceRange = {formik.values.priceRange}

      onDistanceChangeHandler={onDistanceChange}
      onRestaurantTypeChangeHandler={onRestaurantTypeChange}
      onPriceRangeChangeHandler={onPriceRangeChange}
      onRatingChangeHandler={onRatingChange}
      onCleanFiltersPressHandler={onCleanFiltersPress}

    ></FilterScreenUI>
  )
}

