<?php

namespace App\Filament\Resources\ClothResource\RelationManagers;

use App\Filament\Resources\CategoryResource;
use Filament\Resources\Forms\Components;
use Filament\Resources\Forms\Form;
use Filament\Resources\RelationManager;
use Filament\Resources\Tables\Columns;
use Filament\Resources\Tables\Filter;
use Filament\Resources\Tables\Table;

class CategoriesRelationManager extends RelationManager
{
    public static $primaryColumn = 'name';

    public static $relationship = 'categories';

    public static function form(Form $form)
    {
        return CategoryResource::form($form);
    }

    public static function table(Table $table)
    {
        return CategoryResource::table($table);
    }
}
