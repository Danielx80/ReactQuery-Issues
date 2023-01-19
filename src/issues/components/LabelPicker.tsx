import { useLabels } from '../hooks/useLabels';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { FC } from 'react';

interface LabelProps {
  selectedLabels: string | string[],
  onChange: (labelName: string) => void
}

// export const LabelPicker = ({ }: LabelProps) => {

// TODO: esta es otra forma generica de agregar los props 
export const LabelPicker: FC<LabelProps> = ({ selectedLabels, onChange }) => {

  const labelsQuery = useLabels()

  if (labelsQuery.isLoading)  // por que isLoading y no isFetching?
    return (<LoadingIcon />)

  return (
    <>
      {
        labelsQuery.data?.map(label => (
          <span
            key={label.id}
            className={
              `badge rounded-pill m-1 label-picker
               ${selectedLabels.includes(label.name)
                ?
                'label-active'
                :
                ''}`
            }
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>
        ))
      }

    </>
  )
}
